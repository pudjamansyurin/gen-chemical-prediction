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

        <user-form v-model="dialogForm" :id="id" :roles="roles"></user-form>

        <user-delete v-model="dialogDelete" :selected.sync="selected">
        </user-delete>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import { ModelIndexMixin } from "@/Mixins/Model";

import UserList from "./UserList";
import UserForm from "./UserForm";
import UserDelete from "./UserDelete";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        UserList,
        UserForm,
        UserDelete,
    },
    props: ["roles"],
    data() {
        return {
            model: "user",
        };
    },
};
</script>

<style></style>
