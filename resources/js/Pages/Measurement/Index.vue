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

        <measurement-list
            :selected.sync="selected"
            :options.sync="options"
            :total="total"
            :items="items"
            @edit="onEdit"
        >
        </measurement-list>

        <measurement-form v-model="dialogForm" :id="id"></measurement-form>

        <measurement-delete v-model="dialogDelete" :selected.sync="selected">
        </measurement-delete>
    </fragment>
</template>

<script>
import { options as tableOptions, queryOptions } from "@/Config/table";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import MeasurementList from "./MeasurementList";
import MeasurementForm from "./MeasurementForm";
import MeasurementDelete from "./MeasurementDelete";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        MeasurementList,
        MeasurementForm,
        MeasurementDelete,
    },
    props: ["items", "total"],
    data() {
        return {
            model: "measurement",

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
