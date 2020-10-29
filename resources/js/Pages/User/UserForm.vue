<template>
    <v-form @submit.prevent="$emit('save')">
        <validation-observer ref="form">
            <validation-provider name="name" v-slot="{ errors, valid }">
                <v-text-field
                    v-model="form.name"
                    :error-messages="errors"
                    :success="valid"
                    :counter="!profile"
                    :autofocus="!mobile"
                    label="Name"
                    type="text"
                    hint="This should be unique name"
                    persistent-hint
                    outlined
                ></v-text-field>
            </validation-provider>

            <validation-provider name="email" v-slot="{ errors, valid }">
                <v-text-field
                    v-model="form.email"
                    :error-messages="errors"
                    :success="valid"
                    :counter="!profile"
                    label="E-mail"
                    type="email"
                    hint="This email is for recovery"
                    persistent-hint
                    outlined
                ></v-text-field>
            </validation-provider>

            <v-text-field
                v-if="profile"
                v-model="form.role.name"
                type="text"
                label="Role"
                hint="Your current role"
                persistent-hint
                outlined
                readonly
            ></v-text-field>
            <validation-provider
                v-else
                name="role_id"
                v-slot="{ errors, valid }"
            >
                <v-select
                    v-model="form.role_id"
                    :items="listRole"
                    :error-messages="errors"
                    :success="valid"
                    item-text="name"
                    item-value="id"
                    label="Role"
                    hint="Role for this user"
                    chips
                    persistent-hint
                    outlined
                ></v-select>
            </validation-provider>

            <v-btn
                v-if="!creating || profile"
                @click="changePassword = !changePassword"
                color="red"
                class="my-3"
                dark
                small
                outlined
            >
                {{ passwordChangeText }} Password
            </v-btn>

            <template v-if="changePassword">
                <validation-provider name="password" v-slot="{ errors, valid }">
                    <v-text-field
                        v-model="form.password"
                        :type="passwordState.type"
                        :append-icon="passwordState.icon"
                        :error-messages="errors"
                        :success="valid"
                        @click:append="showPassword = !showPassword"
                        label="Password"
                        hint="Password for this user"
                        autocomplete="off"
                        persistent-hint
                        outlined
                        counter
                    ></v-text-field>
                </validation-provider>

                <validation-provider
                    name="password_confirmation"
                    v-slot="{ errors, valid }"
                >
                    <v-text-field
                        v-model="form.password_confirmation"
                        :type="passwordState.type"
                        :append-icon="passwordState.icon"
                        :error-messages="errors"
                        :success="valid"
                        @click:append="showPassword = !showPassword"
                        label="Password Confirmation"
                        hint="Fill again the password"
                        autocomplete="off"
                        persistent-hint
                        outlined
                        counter
                    ></v-text-field>
                </validation-provider>
            </template>
        </validation-observer>
        <v-btn v-show="false" type="submit"></v-btn>
    </v-form>
</template>

<script>
import { CommonMixin, PasswordMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin, PasswordMixin],
    props: {
        value: {
            type: Object,
            required: true,
        },
        fieldDisabled: {
            type: Boolean,
            default: false,
        },
        listRole: {
            type: Array,
            default: () => [],
        },
        profile: {
            type: Boolean,
            default: false,
        },
        changePass: {
            type: Boolean,
            default: false,
        },
        creating: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        form: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        validator() {
            return this.$refs.form;
        },
        changePassword: {
            get() {
                return this.changePass;
            },
            set(value) {
                this.$emit("update:change-pass", value);
            },
        },
    },
};
</script>

<style></style>
