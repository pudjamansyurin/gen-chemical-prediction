<template>
    <the-data
        :selected="selected"
        @update:selected="$emit('update:selected', $event)"
        :options="options"
        @update:options="$emit('update:options', $event)"
        :headers="headers"
        :total="total"
        :items="items"
        :loading="fetching"
    >
        <template v-slot:[`item.name`]="{ item }">
            <v-chip @click="edit(item)" :color="chip(item)" :small="dense" dark>
                {{ item.name }}
            </v-chip>
        </template>
        <template v-slot:[`item.required`]="{ item }">
            <v-icon :color="item.required ? 'primary' : 'red'">
                {{ item.required ? "mdi-check" : "mdi-window-close" }}
            </v-icon>
        </template>
        <template v-slot:[`item.updated_at`]="{ item }">
            {{ item.updated_at | moment("from") }}
        </template>

        <template #card="{ item }">
            <v-btn :color="chip(item)" outlined absolute right small tile top>
                {{ item.required ? "Required" : "Optional" }}
            </v-btn>

            <v-card-text @click="edit(item)">
                <div class="overline">
                    {{ item.updated_at | moment("from") }}
                </div>
                <div class="overline">
                    {{ item.user.name }}
                </div>
                <div class="subtitle-2 font-weight-bold">
                    {{ item.name }}
                </div>
            </v-card-text>
        </template>
    </the-data>
</template>

<script>
import { omit, debounce } from "lodash";

import { CommonMixin } from "@/Mixins";

import TheData from "@/Components/TheData";

export default {
    mixins: [CommonMixin],
    props: {
        selected: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {},
        },
        items: {
            type: Array,
            default: () => [],
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            headers: [
                { text: "Name", value: "name" },
                { text: "Required", value: "required", align: "center" },
                {
                    text: "Formula",
                    value: "formulas_count",
                    align: "center",
                },
                { text: "Creator", value: "user.name" },
                { text: "UpdatedAt", value: "updated_at" },
            ],
            fetching: false,
        };
    },
    components: {
        TheData,
    },
    methods: {
        chip(item) {
            return item.authorized ? "primary" : "grey";
        },
        edit(item) {
            this.$emit("edit", item.id);
        },
    },
    watch: {
        options: {
            handler: debounce(function (value) {
                this.$inertia.replace(
                    route(
                        route().current(),
                        omit(value, [
                            "groupBy",
                            "groupDesc",
                            "mustSort",
                            "multiSort",
                        ])
                    ),
                    {
                        preserveScroll: true,
                        onStart: (visit) => (this.fetching = true),
                        onFinish: () => (this.fetching = false),
                        only: ["status", "items", "total"],
                    }
                );
            }, 500),
        },
    },
};
</script>

<style>
</style>
