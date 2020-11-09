<template>
    <v-row>
        <v-col cols="12" sm="4" :class="{ 'white--text': dark }">
            <div class="text-h6">Update Password</div>
            <div class="text-caption">
                Ensure your account is using a long, random password to stay
                secure.
            </div>
        </v-col>
        <v-col cols="12" sm="8">
            <v-form @submit.prevent="updatePassword" :disabled="isLoading">
                <v-card :dark="dark">
                    <v-card-text>
                        <v-text-field
                            v-model="form.current_password"
                            :type="passwordState.type"
                            :append-icon="passwordState.icon"
                            :error-messages="form.error('current_password')"
                            :success="!!form.error('current_password')"
                            @click:append="showPassword = !showPassword"
                            label="Current Password"
                            hint="Your current password"
                            autocomplete="off"
                            persistent-hint
                            outlined
                            counter
                        ></v-text-field>

                        <v-text-field
                            v-model="form.password"
                            :type="passwordState.type"
                            :append-icon="passwordState.icon"
                            :error-messages="form.error('password')"
                            :success="!!form.error('password')"
                            @click:append="showPassword = !showPassword"
                            label="New Password"
                            hint="Your new password"
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
                            label="New Password Confirmation"
                            hint="Fill again the new password"
                            autocomplete="off"
                            persistent-hint
                            outlined
                            counter
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div>
                            <span
                                v-if="form.recentlySuccessful"
                                class="font-italic green--text mr-3"
                            >
                                Saved.
                            </span>
                            <v-btn
                                :disabled="isLoading"
                                type="submit"
                                color="primary"
                            >
                                Save
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
import { cloneDeep } from "lodash";

import { CommonMixin, PasswordMixin } from "@/Mixins";
import { User } from "@/Config/models";

export default {
    mixins: [CommonMixin, PasswordMixin],
    data() {
        return {
            form: this.$inertia.form(
                {
                    current_password: "",
                    password: "",
                    password_confirmation: "",
                },
                {
                    bag: "updatePassword",
                }
            ),
        };
    },
    methods: {
        updatePassword() {
            this.form.put(route("user-password.update"), {
                preserveScroll: true,
                onStart: (visit) => this.START_LOADING(),
                onFinish: () => this.STOP_LOADING(),
            });
        },
    },
};
</script>

<style>
</style>
