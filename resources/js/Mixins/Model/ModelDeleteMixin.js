import { mapMutations } from "vuex";

import { SET_MESSAGE } from "@/Store/app/mutation-types";

import TheDialogConfirmation from "@/Components/TheDialogConfirmation";

export default {
    components: {
        TheDialogConfirmation
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array,
            default: () => []
        },
        model: {
            type: Object,
            default: () => ({
                name: "",
                form: []
            })
        }
    },
    data() {
        return {
            form: null
        };
    },
    created() {
        this.form = this.$inertia.form(
            {
                _method: "DELETE",
                ids: []
            },
            {
                bag: `${this.model.name}_delete`
            }
        );
    },
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {
        ...mapMutations("app", [SET_MESSAGE]),
        remove() {
            this.form.ids = this.selected.map(({ id }) => id)[0];

            this.form.post(route(`${this.model.name}.destroy`, this.form.ids), {
                preserveScroll: true,
                onSuccess: page => {
                    if (!this.form.hasErrors()) {
                        this.$emit("update:selected", []);
                        this.dialog = false;
                    } else
                        this.SET_MESSAGE({
                            type: "error",
                            text: this.form.error("ids")
                        });
                }
            });
        }
    }
};
