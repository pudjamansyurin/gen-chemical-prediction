<template>
    <fragment>
        <app-top-bar
            :selected.sync="selected"
            :options.sync="options"
            :page-title="model.toUpperCase()"
            @create="onCreate"
            @delete="onDelete"
        >
        </app-top-bar>

        <user-list
            :selected.sync="selected"
            :options.sync="options"
            :total="total"
            :items="items"
            @edit="onEdit"
        >
        </user-list>

        <user-delete v-model="dialogDelete" :selected.sync="selected">
        </user-delete>

        <user-form v-model="dialogForm" :id="id" :roles="roles"></user-form>
    </fragment>
</template>

<script>
import { options as tableOptions, queryOptions } from "@/Config/table";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import UserList from "./UserList";
import UserForm from "./UserForm";
import UserDelete from "./UserDelete";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        UserList,
        UserForm,
        UserDelete,
    },
    props: ["items", "total", "roles"],
    data() {
        return {
            model: "user",

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
