<template>
    <the-dialog-delete
        v-model="dialog"
        :selected="selected"
        :model="model"
        :disabled="formDisabled"
        @delete="remove"
    >
        <template v-slot="{ item }">
            {{ item.name }}
        </template>
    </the-dialog-delete>
</template>

<script>
import { CommonMixin } from "@/Mixins";
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
            form: this.$inertia.form({
                _method: "DELETE",
                ids: [],
            }),
        };
    },
    computed: {
        formDisabled() {
            return !!this.loading || this.form.processing;
        },
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
        remove() {
            this.form.ids = this.selected.map(({ id }) => id);

            this.form
                .post(route("user.destroy", { id: -1 }))
                .then((response) => {
                    if (!this.form.hasErrors()) {
                        this.$emit("update:selected", []);
                        this.dialog = false;
                    }
                });
        },
    },
};
</script>

<style>
</style>
