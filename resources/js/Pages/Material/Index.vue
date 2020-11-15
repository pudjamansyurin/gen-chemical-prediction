<template>
    <fragment>
        <app-top-bar
            :selected.sync="selected"
            :options.sync="options"
            :page-title="model.name.toUpperCase()"
            @create="onCreate"
            @delete="onDelete"
            mine-tab
        >
        </app-top-bar>

        <material-list
            :selected.sync="selected"
            :options.sync="options"
            :total="total"
            :items="items"
            @edit="onEdit"
            mine-tab
        >
        </material-list>

        <material-form
            v-model="dialogForm"
            :model="model"
            :id="id"
            :matters="matters"
        ></material-form>

        <material-delete
            v-model="dialogDelete"
            :model="model"
            :selected.sync="selected"
        >
        </material-delete>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";

import { ModelIndexMixin } from "@/Mixins/Model";
import { Material as model} from "@/Config/models";

import MaterialList from "./MaterialList";
import MaterialForm from "./MaterialForm";
import MaterialDelete from "./MaterialDelete";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        MaterialList,
        MaterialForm,
        MaterialDelete,
    },
    props: ["matters"],
    data() {
        return {
            model,
        };
    },
};
</script>

<style></style>
