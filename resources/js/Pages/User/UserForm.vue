<template>
    <the-dialog-form
        :value="true"
        @input="$emit('close')"
        :model="model"
        :creating="creating"
        @submit="save"
    >
        <v-form @submit.prevent="save">
            <!-- <validation-observer ref="form"> -->
            <!-- <validation-provider name="name" v-slot="{ errors, valid }"> -->
            <v-text-field
                v-model="form.name"
                :error-messages="form.error('name')"
                :success="!!form.error('name')"
                :autofocus="!mobile"
                label="Name"
                type="text"
                hint="This should be unique name"
                persistent-hint
                outlined
            ></v-text-field>
            <!-- </validation-provider> -->

            <!-- <validation-provider name="email" v-slot="{ errors, valid }"> -->
            <v-text-field
                v-model="form.email"
                :error-messages="form.error('email')"
                :success="!!form.error('email')"
                label="E-mail"
                type="email"
                hint="This email is for recovery"
                persistent-hint
                outlined
            ></v-text-field>
            <!-- </validation-provider> -->

            <!-- <v-text-field
            v-if="profile"
            v-model="form.role.name"
            type="text"
            label="Role"
            hint="Your current role"
            persistent-hint
            outlined
            readonly
        ></v-text-field> -->
            <!-- <validation-provider
                v-else
                name="role_id"
                v-slot="{ errors, valid }"
            > -->
            <v-select
                v-model="form.role_id"
                :items="roles"
                :error-messages="form.error('role_id')"
                :success="!!form.error('role_id')"
                item-text="name"
                item-value="id"
                label="Role"
                hint="Role for this user"
                chips
                persistent-hint
                outlined
            ></v-select>
            <!-- </validation-provider> -->

            <!-- <v-btn
            v-if="!creating || profile"
            @click="changePassword = !changePassword"
            color="red"
            class="my-3"
            dark
            small
            outlined
        >
            {{ passwordChangeText }} Password
        </v-btn> -->

            <!-- <template v-if="changePassword"> -->
            <!-- <validation-provider name="password" v-slot="{ errors, valid }"> -->
            <v-text-field
                v-model="form.password"
                :type="passwordState.type"
                :append-icon="passwordState.icon"
                :error-messages="form.error('password')"
                :success="!!form.error('password')"
                @click:append="showPassword = !showPassword"
                label="Password"
                hint="Password for this user"
                autocomplete="off"
                persistent-hint
                outlined
                counter
            ></v-text-field>
            <!-- </validation-provider> -->

            <!-- <validation-provider
                    name="password_confirmation"
                    v-slot="{ errors, valid }"
                > -->
            <v-text-field
                v-model="form.password_confirmation"
                :type="passwordState.type"
                :append-icon="passwordState.icon"
                :error-messages="form.error('password_confirmation')"
                :success="!!form.error('password_confirmation')"
                @click:append="showPassword = !showPassword"
                label="Password Confirmation"
                hint="Fill again the password"
                autocomplete="off"
                persistent-hint
                outlined
                counter
            ></v-text-field>
            <!-- </validation-provider> -->
            <!-- </template> -->
            <!-- </validation-observer> -->
            <v-btn v-show="false" type="submit"></v-btn>
        </v-form>
    </the-dialog-form>
</template>

<script>
import { CommonMixin, PasswordMixin } from "@/Mixins";
import { cloneDeep } from "lodash";

import { User } from "@/Config/models";
import TheDialogForm from "@/Components/TheDialogForm";

export default {
    mixins: [CommonMixin, PasswordMixin],
    props: {
        id: {
            type: Number,
            default: -1,
        },
        roles: {
            type: Array,
            default: () => [],
        },
        // fieldDisabled: {
        //     type: Boolean,
        //     default: false,
        // },
        // profile: {
        //     type: Boolean,
        //     default: false,
        // },
        // changePass: {
        //     type: Boolean,
        //     default: false,
        // },
    },
    components: {
        TheDialogForm,
    },
    data() {
        return {
            form: this.$inertia.form(
                {
                    id: -1,
                    name: "",
                    email: "",
                    role_id: -1,
                    password: "",
                    password_confirmation: "",
                },
                {
                    bag: "userForm",
                }
            ),

            model: "user",
        };
    },
    computed: {
        creating() {
            return this.id == -1;
        },
        // validator() {
        //     return this.$refs.form;
        // },
        // changePassword: {
        //     get() {
        //         return this.changePass;
        //     },
        //     set(value) {
        //         this.$emit("update:change-pass", value);
        //     },
        // },
    },
    methods: {
        save() {
            this.form
                .post(route("user.store"), {
                    preserveScroll: true,
                })
                .then(() => {});
        },
        fetch() {
            this.$http
                .get(route("user.show", { id: this.id }).url())
                .then(({ data }) => {
                    this.form.id = data.id;
                    this.form.name = data.name;
                    this.form.email = data.email;
                    this.form.role_id = data.role_id;
                });
        },
    },
    mounted() {
        if (!this.creating) {
            this.fetch();
        }
    },
};
</script>

<style></style>
