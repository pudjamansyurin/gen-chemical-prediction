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
import { options as tableOptions, queryOptions } from "@/Config/table";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import MaterialList from "./MaterialList";
import MaterialForm from "./MaterialForm";
import MaterialDelete from "./MaterialDelete";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        MaterialList,
        MaterialForm,
        MaterialDelete,
    },
    props: ["items", "total", "matters"],
    data() {
        return {
            model: "material",

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
