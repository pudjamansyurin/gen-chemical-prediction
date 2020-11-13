<template>
    <the-dialog-confirmation
        v-model="dialog"
        :disabled="form.processing"
        @confirmed="remove"
    >
        <template #title>Delete confirmation</template>
        <template #content>
            <p>Are you sure to delete?</p>
            <v-chip v-for="item in selected" :key="item.id" class="ma-1">
                {{ item.name }}
            </v-chip>
        </template>
    </the-dialog-confirmation>
</template>

<script>
import { mapMutations } from "vuex";

import { CommonMixin } from "@/Mixins";
import { SET_MESSAGE } from "@/Store/app/mutation-types";

import TheDialogConfirmation from "@/Components/TheDialogConfirmation";

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
        TheDialogConfirmation,
    },
    data() {
        return {
            model: "formula",
            form: this.$inertia.form(
                {
                    _method: "DELETE",
                    ids: [],
                },
                {
                    bag: 'formula_delete'
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
            this.form.ids = this.selected.map(({ id }) => id)[0];

            this.form.post(route("formula.destroy", this.form.ids), {
                preserveScroll: true,
                onSuccess: (page) => {
                    if (!this.form.hasErrors()) {
                        this.$emit("update:selected", []);
                        this.dialog = false;
                    } else
                        this.SET_MESSAGE({type: "error", text: this.form.error('ids')});
                },
            });
        },
    },
};
</script>

<style>
</style>
