<template>
    <v-card>
        <v-card-text>
            <v-form @submit.prevent="updateProfile" :disabled="isLoading">
                <v-row>
                    <v-col cols="12" sm="4" md="6">
                        <div class="text-h6">Profile Information</div>
                        <div class="text-caption">
                            Update your account's profile information and email
                            address.
                        </div>
                    </v-col>
                    <v-col cols="12" sm="8" md="6">
                        <v-text-field
                            v-model="form.name"
                            :error-messages="form.error('name')"
                            :success="!!form.error('name')"
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

                        <v-text-field
                            :value="form.role.name"
                            label="Role"
                            hint="Role for this user"
                            readonly
                            persistent-hint
                            outlined
                        ></v-text-field>

                        <v-checkbox
                            v-model="form.change_password"
                            label="Change password"
                        >
                        </v-checkbox>
                    </v-col>
                </v-row>
                <v-row v-if="form.change_password">
                    <v-col cols="12" sm="4" md="6">
                        <div class="text-h6">Update Password</div>
                        <div class="text-caption">
                            Ensure your account is using a long, random password
                            to stay secure.
                        </div>
                    </v-col>
                    <v-col cols="12" sm="8" md="6">
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
                            :error-messages="
                                form.error('password_confirmation')
                            "
                            :success="!!form.error('password_confirmation')"
                            @click:append="showPassword = !showPassword"
                            label="Password Confirmation"
                            hint="Fill again the password"
                            autocomplete="off"
                            persistent-hint
                            outlined
                            counter
                        ></v-text-field>
                    </v-col>
                </v-row>

                <div class="text-right">
                    <v-btn :disabled="isLoading" type="submit" color="primary">
                        Save
                    </v-btn>
                </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { cloneDeep } from "lodash";

import { CommonMixin, PasswordMixin } from "@/Mixins";
import { User } from "@/Config/models";

export default {
    mixins: [CommonMixin, PasswordMixin],
    props: ["user"],
    data() {
        return {
            form: this.$inertia.form(
                {
                    _method: "PUT",
                    ...cloneDeep(User),
                    name: this.user.name,
                    email: this.user.email,
                    role: this.user.role,
                },
                {
                    bag: "userForm",
                    resetOnSuccess: false,
                }
            ),
        };
    },
    methods: {
        updateProfile() {
            this.form.post(route("my-profile.update"), {
                // preserveScroll: true,
                onStart: (visit) => this.START_LOADING(),
                onFinish: () => this.STOP_LOADING(),
                onSuccess: (page) => {
                    // if (!this.form.hasErrors()) this.dialog = false;
                },
            });
        },
    },
};
</script>

<style>
</style>
