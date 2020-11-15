<template>
    <fragment>
        <app-top-bar
            :selected.sync="selected"
            :options.sync="options"
            :page-title="model.toUpperCase()"
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
        >
        </material-list>

        <material-form
            v-model="dialogForm"
            :id="id"
            :matters="matters"
        ></material-form>

        <material-delete v-model="dialogDelete" :selected.sync="selected">
        </material-delete>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import { ModelIndexMixin } from "@/Mixins/Model";

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
            model: "material",
        };
    },
};
</script>

<style></style>
