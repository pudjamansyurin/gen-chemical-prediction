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

    <estimator-list
      :selected.sync="selected"
      :options.sync="options"
      :total="total"
      :items="items"
      :can-create="canCreate"
      @edit="onEdit"
    >
    </estimator-list>

    <estimator-form
      v-model="dialogForm"
      :model="model"
      :id="id"
    ></estimator-form>
  </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";

import { ModelIndexMixin } from "@/Mixins/Model";
import { Estimator as model } from "@/Config/models";

import EstimatorList from "./EstimatorList";
import EstimatorForm from "./EstimatorForm";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        EstimatorList,
        EstimatorForm
    },
    data() {
        return {
            model,
        };
    },
};
</script>

<style></style>
