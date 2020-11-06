<template>
    <the-dialog-form v-model="dialog" :title="formTitle" @submit="save">
        <template v-slot="{ disabled }">
            <v-form @submit.prevent="save" :disabled="disabled">
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

                <v-autocomplete
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
                ></v-autocomplete>

                <v-checkbox
                    v-if="!creating"
                    v-model="form.change_password"
                    label="Change password"
                >
                </v-checkbox>

                <template v-if="form.change_password">
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
                </template>

                <v-btn
                    v-show="false"
                    :disabled="disabled"
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
                },
                {
                    bag: "userForm",
                    resetOnSuccess: false,
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

            let action = this.creating ? "New" : "Edit";
            let title = this.model.toUpperCase();
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
    },
    methods: {
        fetch() {
            let url = route("user.show", { id: this.id }).url();
            this.$http.get(url).then(({ data }) => {
                assign(this.form, pick(data, keys(User)));
            });
        },
        reset() {
            delete this.$page.errorBags["userForm"];
            assign(this.form, User);
        },
        method() {
            let method = "post";
            let url = route("user.store");

            if (!this.creating) {
                method = "put";
                url = route("user.update", { id: this.id });
            }

            return { url, method };
        },
        save() {
            let { url, method } = this.method();

            this.form._method = method;
            this.form.post(url, {
                // preserveScroll: true,
                onStart: (visit) => this.START_LOADING(),
                onFinish: () => this.STOP_LOADING(),
                onSuccess: (page) => {
                    if (!this.form.hasErrors()) this.dialog = false;
                },
            });
        },
    },
    watch: {
        id: {
            immediate: true,
            handler(id) {
                this.reset();
                if (!this.creating) this.fetch();
                this.form.change_password = this.creating;
            },
        },
    },
};
</script>

<style></style>
