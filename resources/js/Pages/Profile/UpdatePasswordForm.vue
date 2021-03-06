<template>
    <v-row>
        <v-col cols="12" sm="4" :class="{ 'white--text': darker }">
            <div class="text-h6">
                Update Password
                <v-btn @click="showPassword = !showPassword" icon>
                    <v-icon>
                        {{ passwordState.icon }}
                    </v-icon>
                </v-btn>
            </div>
            <div class="text-caption">
                Ensure your account is using a long, random password to stay
                secure.
            </div>
        </v-col>
        <v-col cols="12" sm="8">
            <v-form
                @submit.prevent="updatePassword"
                :disabled="form.processing"
            >
                <v-card :loading="form.processing" :dark="darker">
                    <v-card-text>
                        <v-text-field
                            v-model="form.current_password"
                            :type="passwordState.type"
                            :error-messages="form.error('current_password')"
                            :success="!!form.error('current_password')"
                            :dense="denser"
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
                            :error-messages="form.error('password')"
                            :success="!!form.error('password')"
                            :dense="denser"
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
                            :error-messages="
                                form.error('password_confirmation')
                            "
                            :success="!!form.error('password_confirmation')"
                            :dense="denser"
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
                                :disabled="form.processing"
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
import { PasswordMixin } from "@/Mixins";

export default {
    mixins: [PasswordMixin],
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
            });
        },
    },
};
</script>

<style>
</style>
