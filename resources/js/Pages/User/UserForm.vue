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
                :dense="denser"
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
                :dense="denser"
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
                :dense="denser"
                item-text="name"
                item-value="id"
                label="Role"
                hint="Role for this user"
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
                :dense="denser"
                label="Change password"
            >
            </v-checkbox>

            <template v-if="form.change_password">
                <v-text-field
                    v-model="form.password"
                    :type="passwordState.type"
                    :error-messages="form.error('password')"
                    :success="!!form.error('password')"
                    :dense="denser"
                    label="Password"
                    hint="Password for this user"
                    persistent-hint
                    outlined
                    counter
                ></v-text-field>

                <v-text-field
                    v-model="form.password_confirmation"
                    :type="passwordState.type"
                    :error-messages="form.error('password_confirmation')"
                    :success="!!form.error('password_confirmation')"
                    :dense="denser"
                    label="Password Confirmation"
                    hint="Fill again the password"
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
import { PasswordMixin } from "@/Mixins";
import { ModelFormMixin } from "@/Mixins/Model";

export default {
    mixins: [ModelFormMixin, PasswordMixin],
    props: {
        roles: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        onFormOpen() {
            this.form.change_password = this.creating;
        }
    },
};
</script>

<style></style>
