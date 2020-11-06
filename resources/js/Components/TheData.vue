<template>
    <fragment>
        <!-- <the-skeleton-loader v-if="items.length == 0 && isLoading">
        </the-skeleton-loader> -->

        <no-content
            v-if="items.length == 0 && !isLoading"
            :model="model"
            :search="options.search"
        >
        </no-content>

        <!-- has data -->
        <div v-if="items.length > 0">
            <the-data-card
                v-if="mobile"
                :value="selected"
                @input="$emit('update:selected', $event)"
                :options="options"
                @update:options="updateOptions"
                :items="items"
            >
                <template v-slot="{ item }">
                    <slot name="card" :item="item"></slot>
                </template>
            </the-data-card>

            <the-data-table
                v-else
                :value="selected"
                @input="$emit('update:selected', $event)"
                :options="options"
                @update:options="updateOptions"
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
import TheSkeletonLoader from "@/Components/TheSkeletonLoader";
import NoContent from "@/Components/Extra/NoContent";

export default {
    mixins: [CommonMixin],
    props: {
        selected: {
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
        TheSkeletonLoader,
        NoContent,
        TheDataCard,
        TheDataTable,
    },
    methods: {
        updateOptions(value) {
            if (!isEqual(this.options, value)) {
                this.$emit("update:options", value);
            }
        },
    },
};
</script>

<style>
</style>
