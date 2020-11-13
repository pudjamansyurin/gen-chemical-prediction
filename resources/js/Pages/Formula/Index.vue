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
import { options as tableOptions, queryOptions } from "@/Config/table";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import FormulaList from "./FormulaList";
import FormulaForm from "./FormulaForm";
import FormulaDelete from "./FormulaDelete";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        FormulaList,
        FormulaForm,
        FormulaDelete,
    },
    props: ["items", "total", "materials"],
    data() {
        return {
            model: "formula",

            id: -1,
            selected: [],
            dialogForm: false,
            dialogDelete: false,
            options: queryOptions(tableOptions),
        };
    },
    methods: {
        onCreate() {
            this.id = -1;
            this.dialogForm = true;
        },
        onEdit(id) {
            if (this.selected.length === 0) {
                this.id = id;
                this.dialogForm = true;
            }
        },
        onDelete() {
            this.dialogDelete = true;
        },
    },
};
</script>

<style></style>
