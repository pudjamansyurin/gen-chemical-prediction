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

            this.form.post(route("user.destroy", { id: -1 }), {
                onStart: (visit) => this.START_LOADING(),
                onFinish: () => this.STOP_LOADING(),
                onSuccess: (page) => {
                    if (!this.form.hasErrors()) {
                        this.$emit("update:selected", []);
                        this.dialog = false;
                    }
                },
            });
        },
    },
};
</script>

<style>
</style>
