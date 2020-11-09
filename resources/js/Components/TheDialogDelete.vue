<template>
    <the-dialog-confirmation
        :value="value"
        @input="$emit('input', $event)"
        @confirmed="$emit('delete')"
    >
        <template #title>Delete confirmation</template>
        <template #content>
            <p>Are you sure to delete {{ question }}</p>
            <v-chip v-for="item in selected" :key="item.id" class="ma-1">
                <slot :item="item"></slot>
            </v-chip>
        </template>
    </the-dialog-confirmation>
</template>

<script>
import pluralize from "pluralize";

import { CommonMixin } from "@/Mixins";

import TheDialogConfirmation from "@/Components/TheDialogConfirmation";

export default {
    mixins: [CommonMixin],
    components: {
        TheDialogConfirmation,
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: Array,
            default: () => [],
        },
        model: {
            type: String,
            default: "",
        },
    },
    computed: {
        question() {
            const { length: single } = this.selected;

            if (single) return `this ${this.model}?`;
            return `these ${length} ${pluralize(this.model)}?`;
        },
    },
};
</script>

<style>
</style>
