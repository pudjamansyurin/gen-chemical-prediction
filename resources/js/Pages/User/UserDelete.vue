<template>
    <the-dialog-delete
        v-model="dialog"
        :selected="selected"
        :model="model"
        @delete="remove"
    >
        <template v-slot="{ item }">
            {{ item.name }}
        </template>
    </the-dialog-delete>
</template>

<script>
import { mapMutations } from "vuex";

import { CommonMixin } from "@/Mixins";
import { SET_MESSAGE } from "@/Store/app/mutation-types";

import TheDialogDelete from "@/Components/TheDialogDelete";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        TheDialogDelete,
    },
    data() {
        return {
            model: "user",
            form: this.$inertia.form(
                {
                    _method: "DELETE",
                    ids: [],
                },
                {
                    bag: "defaultDelete",
                }
            ),
        };
    },
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
        ...mapMutations("app", [SET_MESSAGE]),
        remove() {
            let url = route("user.destroy", { id: -1 });
            this.form.ids = this.selected.map(({ id }) => id);

            this.form.post(url, {
                // preserveScroll: true,
                onStart: (visit) => this.START_LOADING(),
                onFinish: () => this.STOP_LOADING(),
                onSuccess: (page) => {
                    if (!this.form.hasErrors()) {
                        this.$emit("update:selected", []);
                        this.dialog = false;
                    } else if (this.form.error("ids")) {
                        this.SET_MESSAGE({
                            type: "error",
                            text: this.form.error("ids"),
                        });
                    }
                },
            });
        },
    },
};
</script>

<style>
</style>
