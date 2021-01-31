<template>
  <fragment>
    <app-top-bar
      :selected.sync="selected"
      :options.sync="options"
      :can-create="canCreate"
      :page-title="model.name.toUpperCase()"
      @create="onCreate"
      @delete="onDelete"
    >
    </app-top-bar>

    <formula-list
      :selected.sync="selected"
      :options.sync="options"
      :total="total"
      :items="items"
      :can-create="canCreate"
      @edit="onEdit"
    >
    </formula-list>

    <formula-form
      v-model="dialogForm"
      :model="model"
      :id="id"
      :matters="matters"
      :materials="materials"
      :measurements="measurements"
    ></formula-form>

    <formula-delete
      v-model="dialogDelete"
      :model="model"
      :selected.sync="selected"
    >
    </formula-delete>
  </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";

import { ModelIndexMixin } from "@/Mixins/Model";
import { Formula as model } from "@/Config/models";

import FormulaList from "./FormulaList";
import FormulaForm from "./FormulaForm";
import FormulaDelete from "./FormulaDelete";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        FormulaList,
        FormulaForm,
        FormulaDelete,
    },
    props: ["matters", "materials", "measurements"],
    data() {
        return {
            model,
        };
    },
};
</script>

<style></style>
