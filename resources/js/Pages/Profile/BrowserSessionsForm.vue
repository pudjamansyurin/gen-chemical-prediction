<template>
    <v-card>
        <v-card-text>
            <v-form @submit.prevent="updateProfile" :disabled="isLoading">
                <v-row>
                    <v-col cols="12" sm="4" md="6">
                        <div class="text-h6">Browser Sessions</div>
                        <div class="text-caption">
                            Manage and logout your active sessions on other
                            browsers and devices.
                        </div>
                    </v-col>
                    <v-col cols="12" sm="8" md="6"> </v-col>
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
                    _method: "DELETE",
                    password: "",
                },
                {
                    bag: "logoutOtherBrowserSessions",
                }
            ),
        };
    },
    methods: {
        confirmLogout() {
            this.form.password = "";

            this.confirmingLogout = true;

            setTimeout(() => {
                this.$refs.password.focus();
            }, 250);
        },

        logoutOtherBrowserSessions() {
            this.form
                .post(route("other-browser-sessions.destroy"), {
                    preserveScroll: true,
                })
                .then((response) => {
                    if (!this.form.hasErrors()) {
                        this.confirmingLogout = false;
                    }
                });
        },
    },
};
</script>

<style>
</style>
