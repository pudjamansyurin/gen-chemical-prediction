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

        <matter-list
            :selected.sync="selected"
            :options.sync="options"
            :total="total"
            :items="items"
            @edit="onEdit"
        >
        </matter-list>

        <matter-form v-model="dialogForm" :id="id"></matter-form>

        <matter-delete v-model="dialogDelete" :selected.sync="selected">
        </matter-delete>
    </fragment>
</template>

<script>
import { options as tableOptions, queryOptions } from "@/Config/table";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import MatterList from "./MatterList";
import MatterForm from "./MatterForm";
import MatterDelete from "./MatterDelete";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        MatterList,
        MatterForm,
        MatterDelete,
    },
    props: ["items", "total"],
    data() {
        return {
            model: "matter",

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
