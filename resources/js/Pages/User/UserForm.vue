<template>
    <the-dialog-form
        v-model="dialog"
        :title="formTitle"
        :disabled="disabled"
        :readonly="readonly"
        @submit="save"
    >
        <v-form @submit.prevent="save" :disabled="disabled || readonly">
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
                :append-icon="form.change_password ? passwordState.icon : ''"
                @click:append="
                    form.change_password ? (showPassword = !showPassword) : ''
                "
                label="Change password"
            >
            </v-checkbox>

            <template v-if="form.change_password">
                <v-text-field
                    v-model="form.password"
                    :type="passwordState.type"
                    :error-messages="form.error('password')"
                    :success="!!form.error('password')"
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
                    :error-messages="form.error('password_confirmation')"
                    :success="!!form.error('password_confirmation')"
                    label="Password Confirmation"
                    hint="Fill again the password"
                    autocomplete="off"
                    persistent-hint
                    outlined
                    counter
                ></v-text-field>
            </template>

            <v-btn
                v-if="!readonly"
                :disabled="disabled"
                class="d-none"
                type="submit"
            ></v-btn>
        </v-form>
    </the-dialog-form>
</template>

<script>
import { cloneDeep, keys, pick, assign } from "lodash";

import { User } from "@/Config/models";
import { CommonMixin, PasswordMixin } from "@/Mixins";

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
        roles: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        TheDialogForm,
    },
    data() {
        return {
            model: "user",
            fetching: false,
            form: this.$inertia.form(
                {
                    _method: "PUT",
                    ...cloneDeep(User)
                },
                {
                    bag: "user_form",
                    resetOnSuccess: false,
                }
            ),
        };
    },
    computed: {
        creating() {
            return this.id === -1;
        },
        disabled() {
            return this.form.processing || this.fetching;
        },
        readonly() {
            return !(this.creating || this.form.authorized);
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
            this.fetching = true;
            this.$axios
                .get(route("user.show", this.id).url())
                .then(({ data }) => {
                    assign(this.form, pick(data, keys(User)));
                })
                .catch((e) => (this.dialog = false))
                .then(() => (this.fetching = false));
        },
        reset() {
            delete this.$page.errorBags["user_form"];
            assign(this.form, User);
        },
        method() {
            let method = "post";
            let url = route("user.store");

            if (!this.creating) {
                method = "put";
                url = route("user.update", this.id);
            }

            return { url, method };
        },
        save() {
            let { url, method } = this.method();

            this.form._method = method;
            this.form.post(url, {
                preserveScroll: true,
                onSuccess: (page) => {
                    if (!this.form.hasErrors()) this.dialog = false;
                },
            });
        },
    },
    watch: {
        value: {
            immediate: true,
            handler(open) {
                if (open) {
                    if (!this.creating) this.fetch();
                    this.form.change_password = this.creating;
                } else {
                    this.reset();
                }
            },
        },
    },
};
</script>

<style></style>
