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
            <v-chip
                @click="!me(item) && edit(item)"
                :color="chip(item)"
                :small="dense"
                dark
            >
                {{ item.name }}
            </v-chip>
        </template>
        <template v-slot:[`item.email`]="{ item }">
            {{ item.email }}
            <v-icon v-if="item.verified" color="green">
                mdi-check-decagram
            </v-icon>
        </template>
        <template v-slot:[`item.updated_at`]="{ item }">
            {{ item.updated_at | moment("from") }}
        </template>

        <template #card="{ item }">
            <v-btn :color="chip(item)" outlined absolute right small tile top>
                {{ me(item) ? "Profile" : item.role.name }}
            </v-btn>

            <v-card-text @click="!me(item) && edit(item)">
                <div class="overline">
                    {{ item.updated_at | moment("from") }}
                </div>
                <div class="overline">
                    {{ item.name }}
                </div>
                <div class="subtitle-2 font-weight-bold">
                    {{ item.email }}
                    <v-icon v-if="item.verified" color="green">
                        mdi-check-decagram
                    </v-icon>
                </div>
            </v-card-text>
        </template>
    </the-data>
</template>

<script>
import { omit, debounce } from "lodash";

import { CommonMixin, PasswordMixin } from "@/Mixins";

import TheData from "@/Components/TheData";

export default {
    mixins: [CommonMixin, PasswordMixin],
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
            fetching: false,
            headers: [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "role.name", sortable: false },
                { text: "UpdatedAt", value: "updated_at" },
            ],
        };
    },
    components: {
        TheData,
    },
    methods: {
        me({ id }) {
            return this.$page.profile.id === id;
        },
        chip(item) {
            return this.me(item) ? "primary" : "green";
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
                            "mine",
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
