<template>
    <v-dialog
        :value="value"
        @input="$emit('input', $event)"
        :fullscreen="mobile"
        :dark="dark"
        max-width="500"
        persistent
        scrollable
    >
        <v-card :loading="isLoading">
            <v-card-title>
                <slot name="title"></slot>
            </v-card-title>

            <v-divider></v-divider>
            <v-card-text class="pt-2" :style="cardTextHeight">
                <slot name="content"></slot>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
                <v-btn color="darken-1" @click="$emit('input', false)" text>
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="isLoading"
                    @click="$emit('confirmed')"
                    color="red"
                >
                    <span class="white--text">Yes, sure</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        cardTextHeight() {
            return !this.mobile ? "max-height: 400px;" : "";
        },
    },
};
</script>

<style>
</style>
