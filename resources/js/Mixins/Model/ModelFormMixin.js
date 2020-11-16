import { cloneDeep, keys, pick, assign } from "lodash";

import TheDialogForm from "@/Components/TheDialogForm";

export default {
    components: {
        TheDialogForm
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        id: {
            type: Number,
            default: -1
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
            fetching: false,
            form: null
        };
    },
    created() {
        this.form = this.$inertia.form(
            {
                _method: "PUT",
                ...cloneDeep(this.model.form)
            },
            {
                bag: `${this.model.name}_form`,
                resetOnSuccess: false
            }
        );
    },
    computed: {
        creating() {
            return this.id === -1;
        },
        disabled() {
            return this.form.processing || this.fetching;
        },
        readonly() {
            return !(this.creating || this.form.authorized);
        },
        formTitle() {
            if (this.readonly) return;

            let action = this.creating ? "New" : "Edit";
            let title = this.model.name.toUpperCase();
            return `${action} ${title}`;
        },
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
        getFromList(list, { id }) {
            return list.find(el => el.id === id);
        },
        fetch() {
            this.fetching = true;
            this.$axios
                .get(route(`${this.model.name}.show`, this.id).url())
                .then(({ data }) => {
                    assign(this.form, pick(data, keys(this.model.form)));
                })
                .catch(e => (this.dialog = false))
                .then(() => (this.fetching = false));
        },
        reset() {
            delete this.$page.errorBags[`${this.model.name}_form`];
            assign(this.form, this.model.form);
        },
        method() {
            let method = "post";
            let url = route(`${this.model.name}.store`);

            if (!this.creating) {
                method = "put";
                url = route(`${this.model.name}.update`, this.id);
            }

            return { url, method };
        },
        save() {
            let { url, method } = this.method();

            this.form._method = method;
            this.form.post(url, {
                preserveScroll: true,
                onSuccess: page => {
                    if (!this.form.hasErrors()) this.dialog = false;
                }
            });
        },
        onFormOpen() {}
    },
    watch: {
        value: {
            immediate: true,
            handler(open) {
                if (open) {
                    if (!this.creating) this.fetch();
                    this.onFormOpen();
                } else {
                    this.reset();
                }
            }
        }
    }
};
