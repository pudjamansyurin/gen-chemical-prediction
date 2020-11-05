<template>
    <fragment>
        <app-top-bar
            :options.sync="options"
            :selected.sync="selected"
            :page="model"
            @create="onCreate"
            @delete="onDelete"
            crud
        ></app-top-bar>

        <the-data
            v-model="selected"
            :options.sync="options"
            :headers="headers"
            :model="model"
            :total="total"
            :items="items"
        >
            <template v-slot:card="{ item }">
                <v-btn
                    :color="chip(item)"
                    outlined
                    absolute
                    top
                    right
                    small
                    tile
                >
                    {{ me(item) ? "Profile" : item.role.name }}
                </v-btn>

                <v-card-text @click="!me(item) && onEdit(item)">
                    <div class="overline">
                        {{ item.updated_at | moment("from") }}
                    </div>
                    <div class="overline">
                        {{ item.name }}
                    </div>
                    <div class="subtitle-2 font-weight-bold">
                        {{ item.email }}
                    </div>
                </v-card-text>
            </template>

            <template v-slot:[`item.name`]="{ item }">
                <v-chip
                    @click="!me(item) && onEdit(item)"
                    :color="chip(item)"
                    :small="dense"
                    dark
                >
                    {{ item.name }}
                </v-chip>
            </template>

            <template v-slot:[`item.updated_at`]="{ item }">
                {{ item.updated_at | moment("from") }}
            </template>
        </the-data>

        <user-delete
            v-model="dialogDelete"
            :selected.sync="selected"
        ></user-delete>

        <user-form v-model="dialogForm" :id="id" :roles="roles"></user-form>
    </fragment>
</template>

<script>
import { mapState } from "vuex";
import { cloneDeep, pick, omit, debounce } from "lodash";

import { User } from "@/Config/models";
import { options as tableOptions } from "@/Config/table";
import {
    CommonMixin,
    // ModelMixin,
    PasswordMixin,
    // FetchListMixin,
} from "@/Mixins";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import TheData from "@/Components/TheData";
import UserForm from "./UserForm";
import UserDelete from "./UserDelete";

export default {
    mixins: [CommonMixin, PasswordMixin /* FetchListMixin */],
    layout: PrivateLayout,
    components: {
        AppTopBar,
        TheData,
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
        ...mapState("app", ["profile"]),
        // fieldDisabled() {
        //     return !this.creating && !this.form.authorized;
        // },
    },
    methods: {
        onCreate() {
            this.id = -1;
            this.dialogForm = true;
        },
        onEdit({ id }) {
            this.id = id;
            this.dialogForm = true;
        },
        onDelete() {
            this.dialogDelete = true;
        },
        me({ id }) {
            return this.profile.id === id;
        },
        chip(item) {
            return this.me(item) ? "primary" : "green";
        },
    },
    watch: {
        options: {
            handler: debounce(function (value) {
                this.$inertia.replace(route(route().current()), {
                    data: omit(value, [
                        "groupBy",
                        "groupDesc",
                        "mustSort",
                        "multiSort",
                        "mine",
                    ]),
                    only: ["flash", "items", "total"],
                    onStart: (visit) => this.START_LOADING(),
                    onFinish: () => this.STOP_LOADING(),
                });
            }, 500),
        },
    },
};
</script>

<style></style>
