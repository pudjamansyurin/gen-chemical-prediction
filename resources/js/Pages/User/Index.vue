<template>
    <private-layout>
        <app-top-bar
            :options.sync="options"
            :selected.sync="selected"
            :page="model"
            @create="onCreate"
            @delete="dialogDelete = true"
            crud
        ></app-top-bar>

        <the-data
            v-model="selected"
            :options.sync="options"
            :headers="headers"
            :model="model"
            :total="total"
            :items="data"
        >
            <template v-slot:card="{ item }">
                <!-- <v-btn
                    :color="chip(item)"
                    :outlined="!item.selected"
                    absolute
                    top
                    right
                    small
                    tile
                >
                    {{ me(item) ? "Profile" : item.role.name }}
                </v-btn>

                <v-card-text @click="!me(item) && edit(item)">
                    <div class="overline">
                        {{ item.name }}
                    </div>
                    <div class="subtitle-2 font-weight-bold">
                        {{ item.email }}
                    </div>
                </v-card-text> -->
            </template>

            <template v-slot:[`item.name`]="{ item }">
                <v-chip
                    @click="!me(item) && onEdit(item.id)"
                    :color="chip(item)"
                    :small="dense"
                    dark
                >
                    {{ item.name }}
                </v-chip>
            </template>
        </the-data>

        <!-- <the-dialog-delete
            v-model="dialogDelete"
            :selected="selected"
            :model="model"
            @delete="remove"
            @close="dialogDelete = false"
        >
            <template v-slot="{ item }">
                {{ item.name }}
            </template>
        </the-dialog-delete> -->

        <user-form
            v-if="dialogForm"
            @close="dialogForm = false"
            :id="id"
            :roles="roles"
        ></user-form>
    </private-layout>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { cloneDeep } from "lodash";

import { User } from "@/Config/models";
import { table } from "@/Config";
import { /* eHandler, */ ls } from "@/Utils";
import {
    CommonMixin,
    // ModelMixin,
    PasswordMixin,
    // FetchListMixin,
} from "@/Mixins";
import { SET_PROFILE } from "@/Store/app/mutation-types";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import UserForm from "./UserForm";
import TheData from "@/Components/TheData";
import TheDialogDelete from "@/Components/TheDialogDelete";

export default {
    mixins: [CommonMixin, PasswordMixin /* FetchListMixin */],
    components: {
        PrivateLayout,
        AppTopBar,
        UserForm,

        TheData,
        TheDialogDelete,
    },
    props: ["user", "data", "total", "roles"],
    data() {
        return {
            model: "user",
            modelDefault: User,
            headers: [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "role.name", sortable: false },
            ],
            changePassword: false,

            selected: [],
            dialogForm: false,
            dialogDelete: false,
            options: cloneDeep({
                ...table.options,
                itemsPerPage: ls.get("perPage") || table.options.itemsPerPage,
            }),

            id: -1,
        };
    },
    computed: {
        ...mapState("app", ["profile"]),
        // ...mapState("model", ["users"]),

        fieldDisabled() {
            // return !this.creating && !this.form.authorized;
            return false;
        },
    },
    methods: {
        ...mapMutations("app", [SET_PROFILE]),
        onCreate() {
            // this.change(this.modelDefault);
            this.id = -1;
            this.dialogForm = true;
        },
        onEdit(id) {
            // this.change(item || this.selected[0]);
            this.id = id;
            this.dialogForm = true;
        },
        me({ id }) {
            return this.profile.id == id;
        },
        chip(item) {
            return this.me(item) ? "primary" : "green";
        },

        // change(item) {
        //     this.changePassword = item.id === -1;
        //     // this.form = this.copyWithPassword(item);
        // },
        // onSave() {
        //     this.removeUnchangedPassword();
        // },
        // toProfile() {
        //     // this.$router.push({ name: "profile" });
        // },
        // close() {},
        // create() {},
        // edit() {},
        // remove() {},
        // save() {},
    },
    mounted() {
        this.SET_PROFILE(this.user);
    },
};
</script>

<style></style>
