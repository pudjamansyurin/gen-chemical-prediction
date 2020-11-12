<template>
    <v-row>
        <v-col cols="12" sm="4" :class="{ 'white--text': dark }">
            <div class="text-h6">
                Profile Information
                <v-chip
                    v-if="!profile.verified"
                    @click="verifyEmail"
                    :disabled="verifier.processing"
                    color="primary"
                    small
                >
                    {{ verifier.processing ? "Verifying..." : "Verify Email" }}
                </v-chip>
            </div>
            <div class="text-caption">
                Update your account's profile information and email address.
            </div>
        </v-col>
        <v-col cols="12" sm="8">
            <v-form @submit.prevent="updateProfile" :disabled="form.processing">
                <v-card :loading="form.processing" :dark="dark">
                    <v-card-text>
                        <v-text-field
                            v-model="form.name"
                            :error-messages="form.error('name')"
                            :success="!!form.error('name')"
                            label="Name"
                            type="text"
                            hint="Your profile name"
                            persistent-hint
                            outlined
                        ></v-text-field>

                        <v-text-field
                            v-model="form.email"
                            :error-messages="form.error('email')"
                            :success="!!form.error('email')"
                            :append-icon="
                                profile.verified ? 'mdi-check-decagram' : ''
                            "
                            label="E-mail"
                            type="email"
                            hint="Your recovery email"
                            persistent-hint
                            outlined
                        ></v-text-field>

                        <v-text-field
                            :value="form.role.name"
                            label="Role"
                            hint="Your current role"
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
import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
    props: ["profile"],
    data() {
        return {
            form: this.$inertia.form(
                {
                    _method: "PUT",
                    name: this.profile.name,
                    email: this.profile.email,
                    role: this.profile.role,
                },
                {
                    bag: "updateProfileInformation",
                    resetOnSuccess: false,
                }
            ),
            verifier: this.$inertia.form(),
        };
    },
    methods: {
        updateProfile() {
            this.form.post(route("user-profile-information.update"), {
                preserveScroll: true,
            });
        },
        verifyEmail() {
            this.verifier.post(route("verification.send"), {
                preserveScroll: true,
            });
        },
    },
};
</script>

<style>
</style>
