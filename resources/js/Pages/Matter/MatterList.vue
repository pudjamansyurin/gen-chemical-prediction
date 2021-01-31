<template>
  <the-data
    :selected="selected"
    @update:selected="$emit('update:selected', $event)"
    :options="options"
    @update:options="$emit('update:options', $event)"
    :headers="headers"
    :total="total"
    :items="items"
    :can-create="canCreate"
    :loading="fetching"
  >
    <template v-slot:[`item.name`]="{ item }">
      <v-chip @click="edit(item)" :color="chip(item)" :small="denser" dark>
        {{ item.name }}
      </v-chip>
    </template>
    <template v-slot:[`item.required`]="{ item }">
      {{ item.required ? "Required" : "Optional" }}
    </template>
    <template v-slot:[`item.updated_at`]="{ item }">
      {{ item.updated_at | moment("from") }}
    </template>

    <template #card="{ item }">
      <v-btn :color="chip(item)" absolute right small tile top>
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
import { ModelListMixin } from "@/Mixins/Model";

export default {
    mixins: [ModelListMixin],
    data() {
        return {
            headers: [
                { text: "Name", value: "name" },
                { text: "Type", value: "required" },
                {
                    text: "Material",
                    value: "materials_count",
                    align: "center",
                },
                { text: "Creator", value: "user.name" },
                { text: "UpdatedAt", value: "updated_at" },
            ],
        };
    },
};
</script>

<style>
</style>
