<template>
    <the-dialog-confirmation
        v-model="dialog"
        :disabled="form.processing"
        @confirmed="remove"
    >
        <template #title>Delete confirmation</template>
        <template #content>
            <v-alert v-if="!!form.error('ids')" type="warning" dense left>
                {{ form.error("ids") }}
            </v-alert>
            <p>Are you sure to delete?</p>
            <v-chip v-for="item in selected" :key="item.id" class="ma-1">
                {{ item.name }}
            </v-chip>
        </template>
    </the-dialog-confirmation>
</template>

<script>
import { mapMutations } from "vuex";
// import pluralize from "pluralize";

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
        // question() {
        //     const { length: single } = this.selected;
        //     if (single) return `this ${this.model}?`;
        //     return `these ${length} ${pluralize(this.model)}?`;
        // },
    },
    methods: {
        ...mapMutations("app", [SET_MESSAGE]),
        remove() {
            this.form.ids = this.selected.map(({ id }) => id);

            this.form.post(route("user.destroy", { id: this.form.ids[0] }), {
                preserveScroll: true,
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
