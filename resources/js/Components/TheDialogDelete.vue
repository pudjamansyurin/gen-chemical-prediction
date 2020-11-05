<template>
    <v-dialog
        :value="value"
        @input="$emit('input', $event)"
        :fullscreen="mobile"
        :dark="dark"
        max-width="400"
        persistent
        scrollable
    >
        <v-card :loading="isLoading">
            <v-card-title> Confirmation </v-card-title>
            <v-divider></v-divider>

            <v-card-text class="pt-2" :style="cardTextHeight">
                Are you sure to delete {{ question }}
                <br />
                <!-- <v-chip-group column small active-class="primary--text"> -->
                <v-chip v-for="item in selected" class="ma-1" :key="item.id">
                    <slot :item="item"></slot>
                </v-chip>
                <!-- </v-chip-group> -->
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="darken-1" @click="$emit('input', false)" text>
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="isLoading"
                    @click="$emit('delete')"
                    color="red"
                >
                    <span class="white--text">Yes, sure</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import pluralize from "pluralize";

import { CommonMixin } from "@/Mixins";

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
        cardTextHeight() {
            return !this.mobile ? "max-height: 300px;" : "";
        },
    },
};
</script>

<style>
</style>
