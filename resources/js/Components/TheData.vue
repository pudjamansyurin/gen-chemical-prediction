<template>
  <fragment>
    <!-- has data -->
    <div v-show="items.length > 0">
      <the-data-table
        v-if="!mobile"
        :value="selected"
        @input="$emit('update:selected', $event)"
        :options="options"
        @update:options="updateOptions"
        :items="items"
        :total="total"
        :can-create="canCreate"
        :headers="headers"
        :loading="loading"
      >
        <template
          v-for="header in headers"
          v-slot:[`item.${header.value}`]="{ item }"
        >
          <slot :name="`item.${header.value}`" :item="item"></slot>
        </template>
      </the-data-table>

      <the-data-card
        v-else
        :value="selected"
        @input="$emit('update:selected', $event)"
        :options="options"
        @update:options="updateOptions"
        :items="items"
        :total="total"
      >
        <template v-slot="{ item }">
          <slot name="card" :item="item"></slot>
        </template>
      </the-data-card>
    </div>

    <no-content v-show="items.length == 0" :search="options.search">
    </no-content>

    <!-- <the-skeleton-loader v-show="items.length == 0 && loading">
        </the-skeleton-loader> -->
  </fragment>
</template>

<script>
import { isEqual } from "lodash";

import TheDataCard from "@/Components/TheDataCard";
import TheDataTable from "@/Components/TheDataTable";
// import TheSkeletonLoader from "@/Components/TheSkeletonLoader";
import NoContent from "@/Components/Extra/NoContent";

export default {
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
        canCreate: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 0,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        // TheSkeletonLoader,
        NoContent,
        TheDataCard,
        TheDataTable,
    },
    methods: {
        updateOptions(value) {
            if (!isEqual(this.options, value))
                this.$emit("update:options", value);
        },
    },
};
</script>

<style>
</style>
