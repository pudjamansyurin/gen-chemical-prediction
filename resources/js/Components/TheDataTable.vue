<template>
  <v-data-table
    :value="value"
    @input="$emit('input', $event)"
    :options="options"
    @update:options="$emit('update:options', $event)"
    :headers="headers"
    :items="items"
    :server-items-length="total"
    :loading="loading"
    :dense="denser"
    :dark="darker"
    :footer-props="{
      itemsPerPageText: 'Rows',
    }"
    :show-select="canCreate"
    selectable-key="authorized"
    sort-by="updated_at"
    class="elevation-1"
    single-select
    sort-desc
    must-sort
  >
    <template
      v-for="header in headers"
      v-slot:[`item.${header.value}`]="{ item }"
    >
      <slot :name="`item.${header.value}`" :item="item">
        {{ getItemValue(item, header) }}
      </slot>
    </template>
  </v-data-table>
</template>

<script>
import { mapMutations } from "vuex";
import { get } from "lodash";

export default {
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
        total: {
            type: Number,
            default: 0,
        },
        canCreate: {
            type: Boolean,
            default: false
        },
        headers: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        getItemValue(item, header) {
            return get(item, header.value);
        },
    },
};
</script>

<style>
</style>
