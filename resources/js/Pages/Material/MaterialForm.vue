<template>
  <the-dialog-form
    v-model="dialog"
    :title="formTitle"
    :disabled="disabled"
    :readonly="readonly"
    @submit="save"
  >
    <v-form @submit.prevent="save" :disabled="disabled" :readonly="readonly">
      <v-text-field
        v-model="form.name"
        :error-messages="form.error('name')"
        :success="!!form.error('name')"
        :autofocus="!mobile"
        :dense="denser"
        label="Material name"
        type="text"
        hint="This should be unique name"
        persistent-hint
        outlined
      ></v-text-field>

      <v-autocomplete
        v-model="form.matter_id"
        :items="matters"
        :error-messages="form.error('matter_id')"
        :success="!!form.error('matter_id')"
        :dense="denser"
        item-text="name"
        item-value="id"
        label="Matter"
        hint="Category for this material"
        persistent-hint
        outlined
      >
        <template v-slot:item="{ item }">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.required ? "Required" : "Optional" }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-autocomplete>

      <v-btn
        v-if="!readonly"
        :disabled="disabled"
        class="d-none"
        type="submit"
      ></v-btn>
    </v-form>
  </the-dialog-form>
</template>

<script>
import { ModelFormMixin } from "@/Mixins/Model";

export default {
    mixins: [ModelFormMixin],
    props: {
        matters: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style></style>
