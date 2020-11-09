<template>
    <v-row>
        <v-col cols="12" sm="4" :class="{ 'white--text': dark }">
            <div class="text-h6">Profile Information</div>
            <div class="text-caption">
                Update your account's profile information and email address.
            </div>
        </v-col>
        <v-col cols="12" sm="8">
            <v-form @submit.prevent="updateProfile" :disabled="isLoading">
                <v-card :dark="dark">
                    <v-card-text>
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

import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
    props: ["user"],
    data() {
        return {
            form: this.$inertia.form(
                {
                    _method: "PUT",
                    name: this.user.name,
                    email: this.user.email,
                    role: this.user.role,
                },
                {
                    bag: "updateProfileInformation",
                    resetOnSuccess: false,
                }
            ),
        };
    },
    methods: {
        updateProfile() {
            this.form.post(route("user-profile-information.update"), {
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
