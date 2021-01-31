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

    <matter-list
      :selected.sync="selected"
      :options.sync="options"
      :total="total"
      :items="items"
      :can-create="canCreate"
      @edit="onEdit"
    >
    </matter-list>

    <matter-form v-model="dialogForm" :model="model" :id="id"></matter-form>

    <matter-delete
      v-model="dialogDelete"
      :model="model"
      :selected.sync="selected"
    >
    </matter-delete>
  </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";

import { ModelIndexMixin } from "@/Mixins/Model";
import { Matter as model } from "@/Config/models";

import MatterList from "./MatterList";
import MatterForm from "./MatterForm";
import MatterDelete from "./MatterDelete";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        MatterList,
        MatterForm,
        MatterDelete,
    },
    data() {
        return {
            model,
        };
    },
};
</script>

<style></style>
