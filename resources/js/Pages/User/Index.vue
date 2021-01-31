<template>
  <fragment>
    <app-top-bar
      :selected.sync="selected"
      :options.sync="options"
      :page-title="model.name.toUpperCase()"
      :can-create="canCreate"
      @create="onCreate"
      @delete="onDelete"
    >
    </app-top-bar>

    <user-list
      :selected.sync="selected"
      :options.sync="options"
      :total="total"
      :items="items"
      :can-create="canCreate"
      @edit="onEdit"
    >
    </user-list>

    <user-form
      v-model="dialogForm"
      :model="model"
      :id="id"
      :roles="roles"
    ></user-form>

    <user-delete
      v-model="dialogDelete"
      :model="model"
      :selected.sync="selected"
    >
    </user-delete>
  </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";

import { ModelIndexMixin } from "@/Mixins/Model";
import { User as model } from "@/Config/models";

import UserList from "./UserList";
import UserForm from "./UserForm";
import UserDelete from "./UserDelete";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        UserList,
        UserForm,
        UserDelete,
    },
    props: ["roles"],
    data() {
        return {
            model,
        };
    },
};
</script>

<style></style>
