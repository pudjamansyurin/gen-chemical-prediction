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

        <formula-list
            :selected.sync="selected"
            :options.sync="options"
            :total="total"
            :items="items"
            @edit="onEdit"
        >
        </formula-list>

        <formula-form
            v-model="dialogForm"
            :id="id"
            :materials="materials"
        ></formula-form>

        <formula-delete v-model="dialogDelete" :selected.sync="selected">
        </formula-delete>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import ModelIndex from "@/Mixins/Model/ModelIndex";

import FormulaList from "./FormulaList";
import FormulaForm from "./FormulaForm";
import FormulaDelete from "./FormulaDelete";

export default {
    mixins: [ModelIndex],
    layout: PrivateLayout,
    components: {
        FormulaList,
        FormulaForm,
        FormulaDelete,
    },
    props: ["materials"],
    data() {
        return {
            model: "formula",
        };
    },
};
</script>

<style></style>
