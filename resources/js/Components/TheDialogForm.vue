<template>
    <v-dialog
        :value="value"
        @input="$emit('input', $event)"
        :fullscreen="mobile || fullscreen"
        :max-width="width"
        :dark="dark"
        persistent
        scrollable
    >
        <v-card :loading="!!loading">
            <v-card-title>
                <v-row no-gutters>
                    <v-col cols="12" sm="5">
                        <span class="headline">{{ title }}</span>

                        <v-btn
                            v-if="!mobile"
                            @click="fullscreen = !fullscreen"
                            icon
                        >
                            <v-icon>{{ fullscreenIcon }}</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col v-if="tabs.length" cols="12" sm="7">
                        <v-tabs
                            :value="tab"
                            @change="$emit('update:tab', $event)"
                            background-color="transparent"
                            active-class="font-weight-bold"
                            height="30"
                            hide-slider
                            right
                        >
                            <v-tab v-for="item in tabs" :key="item">
                                {{ item }}
                            </v-tab>
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text class="pt-2" :style="cardTextHeight">
                <v-tabs-items
                    v-if="tabs.length"
                    :value="tab"
                    @input="$emit('update:tab', $event)"
                    touchless
                    :dark="dark"
                >
                    <v-tab-item v-for="item in tabs" :key="item">
                        <slot :name="item" :disabled="disabled"> </slot>
                    </v-tab-item>
                </v-tabs-items>
                <slot v-else :disabled="disabled"></slot>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
                <v-btn
                    @click="$emit('input', false)"
                    color="blue darken-1"
                    text
                >
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    v-if="!readonly"
                    :disabled="disabled"
                    @click="$emit('submit')"
                    color="primary"
                >
                    Save
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
        title: {
            type: String,
            default: "Detail Item",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },

        width: {
            type: [String, Number],
            default: 600,
        },
        tabs: {
            type: Array,
            default: () => [],
        },
        tab: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            fullscreen: true,
        };
    },
    computed: {
        cardTextHeight() {
            if (!this.mobile && !this.fullscreen) return "max-height: 500px;";
        },
        fullscreenIcon() {
            return `mdi-fullscreen${this.fullscreen ? "-exit" : ""}`;
        },
    },
};
</script>

<style>
</style>
