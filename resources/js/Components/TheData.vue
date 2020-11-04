<template>
    <fragment>
        <!-- loading desktop -->
        <v-skeleton-loader
            v-show="items.length == 0 && !!loading && !mobile"
            :dark="dark"
            type="table"
        >
        </v-skeleton-loader>
        <!-- loading mobile  -->
        <v-skeleton-loader
            v-show="items.length == 0 && !!loading && mobile"
            v-for="n in 10"
            :key="n"
            :dark="dark"
            type="article"
            class="my-3"
        ></v-skeleton-loader>
        <!-- no data -->
        <v-alert
            v-show="items.length == 0 && !!!loading"
            :dark="dark"
            type="info"
            border="top"
        >
            <span>Oops, no {{ model }} data.</span>
        </v-alert>
        <!-- has data -->
        <div v-show="items.length > 0">
            <the-data-card
                v-if="mobile"
                :value="value"
                @input="$emit('input', $event)"
                :options="options"
                @update:options="update($event)"
                :items="items"
            >
                <template v-slot="{ item }">
                    <slot name="card" :item="item"></slot>
                </template>
            </the-data-card>

            <the-data-table
                v-else
                :value="value"
                @input="$emit('input', $event)"
                :options="options"
                @update:options="update($event)"
                :items="items"
                :headers="headers"
                :total="total"
            >
                <template
                    v-for="header in headers"
                    v-slot:[`item.${header.value}`]="{ item }"
                >
                    <slot :name="`item.${header.value}`" :item="item"></slot>
                </template>
            </the-data-table>
        </div>
    </fragment>
</template>

<script>
import { isEqual } from "lodash";
import { CommonMixin } from "@/Mixins";

import TheDataCard from "@/Components/TheDataCard";
import TheDataTable from "@/Components/TheDataTable";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        headers: {
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
        model: {
            type: String,
            defautl: "",
        },
    },
    components: {
        TheDataCard,
        TheDataTable,
    },
    methods: {
        update(options) {
            if (!isEqual(this.options, options)) {
                this.$emit("update:options", options);
            }
        },
    },
};
</script>

<style>
</style>
