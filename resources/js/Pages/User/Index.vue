<template>
    <fragment>
        <app-top-bar
            :selected.sync="selected"
            :options.sync="options"
            :page="model"
            @create="onCreate"
            @delete="onDelete"
        ></app-top-bar>

        <user-list
            :selected.sync="selected"
            :options.sync="options"
            :model="model"
            :headers="headers"
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
import { cloneDeep } from "lodash";

import { User } from "@/Config/models";
import { options as tableOptions } from "@/Config/table";

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
            headers: [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "role.name", sortable: false },
                { text: "UpdatedAt", value: "updated_at" },
            ],

            id: -1,
            selected: [],
            dialogForm: false,
            dialogDelete: false,
            options: cloneDeep(tableOptions),
        };
    },
    computed: {
        // fieldDisabled() {
        //     return !this.creating && !this.form.authorized;
        // },
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
