<template>
    <v-row align="center" justify="center" dense>
        <v-col v-for="item in items" :key="item.id" cols="12">
            <v-card
                v-longclick="() => toggleSelect(item)"
                @click="selected.length > 0 && toggleSelect(item)"
                :key="item.id"
                :dark="dark"
                tile
            >
                <v-progress-linear
                    v-if="selectedIndex(item) > -1"
                    :value="100"
                    :dark="dark"
                    color="primary"
                ></v-progress-linear>

                <slot :item="item"></slot>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import pluralize from "pluralize";
import { mapState } from "vuex";

import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        items: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        ...mapState("app", ["size"]),
        selected: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
        selectedIndex(item) {
            return this.selected.findIndex(({ id }) => id === item.id);
        },
        toggleSelect(item) {
            if (!item.authorized) return;

            let index = this.selectedIndex(item);
            if (index > -1) {
                this.selected.splice(index, 1);
            } else {
                this.selected.push(item);
            }
        },
    },
};
</script>

<style></style>
