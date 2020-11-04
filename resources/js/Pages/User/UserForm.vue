<template>
    <the-dialog-form
        v-model="dialog"
        :title="formTitle"
        :disabled="!!loading || form.processing"
        @submit="save"
    >
        <template v-slot="{ disabled }">
            <v-form @submit.prevent="save" :disabled="disabled">
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
                <v-btn
                    v-show="false"
                    :disabled="form.processing"
                    type="submit"
                ></v-btn>
            </v-form>
        </template>
    </the-dialog-form>
</template>

<script>
import { CommonMixin, PasswordMixin } from "@/Mixins";
import { cloneDeep, keys, pick, assign } from "lodash";

import { User } from "@/Config/models";
import TheDialogForm from "@/Components/TheDialogForm";

export default {
    mixins: [CommonMixin, PasswordMixin],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
            default: -1,
        },
        readonly: {
            type: Boolean,
            default: false,
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
            model: "user",
            form: this.$inertia.form(
                {
                    _method: "PUT",
                    ...cloneDeep(User),
                    password: "",
                    password_confirmation: "",
                },
                {
                    bag: "userForm",
                }
            ),
        };
    },
    computed: {
        creating() {
            return this.id === -1;
        },
        formTitle() {
            if (this.readonly) return;

            let title = this.model.toUpperCase();
            let action = this.creating ? "New" : "Edit";
            return `${action} ${title}`;
        },
        dialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
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
            let method = "post";
            let url = route("user.store");

            if (!this.creating) {
                method = "put";
                url = route("user.update", { id: this.id });
            }

            this.form._method = method;
            this.form
                .post(url, {
                    preserveScroll: true,
                })
                .then((response) => {
                    if (!this.form.hasErrors()) {
                        this.dialog = false;
                    }
                })
                .catch((e) => {
                    console.warn(e);
                });
        },
        fetch() {
            this.$http
                .get(route("user.show", { id: this.id }).url())
                .then(({ data }) => {
                    assign(this.form, pick(data, keys(User)));
                });
        },
        reset() {
            delete this.$page.errorBags["userForm"];
            assign(this.form, User);
        },
    },
    watch: {
        id: {
            handler(id) {
                this.reset();

                if (!this.creating) {
                    this.fetch();
                }
            },
        },
    },
};
</script>

<style></style>
