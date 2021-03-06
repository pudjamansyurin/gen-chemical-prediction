<template>
    <fragment>
        <v-row>
            <v-col cols="12" sm="4" :class="{ 'white--text': darker }">
                <div class="text-h6">Browser Sessions</div>
                <div class="text-caption">
                    Manage and logout your active sessions on other browsers and
                    devices.
                </div>
            </v-col>
            <v-col cols="12" sm="8">
                <v-card :loading="form.processing" :dark="darker">
                    <v-card-text>
                        <browser-sessions-list
                            :sessions="sessions"
                        ></browser-sessions-list>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div>
                            <span
                                v-if="form.recentlySuccessful"
                                class="font-italic green--text mr-3"
                            >
                                Loged out.
                            </span>
                            <v-btn
                                :disabled="
                                    form.processing || sessions.length === 1
                                "
                                @click="confirmLogout"
                                color="primary"
                            >
                                Logout Other Sessions
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <the-dialog-confirmation
            v-model="confirmingLogout"
            :disabled="form.processing"
            @confirmed="logoutOtherBrowserSessions"
        >
            <template #title>Logout Other Sessions</template>
            <template #content>
                <p>
                    Please enter your password to confirm you would like to
                    logout of your other browser sessions across all of your
                    devices.
                </p>
                <v-text-field
                    v-model="form.password"
                    :type="passwordState.type"
                    :append-icon="passwordState.icon"
                    :error-messages="form.error('password')"
                    :success="!!form.error('password')"
                    :disabled="form.processing"
                    :dense="denser"
                    @click:append="showPassword = !showPassword"
                    @keyup.enter.native="logoutOtherBrowserSessions"
                    label="Current password"
                    hint="Your current password"
                    autocomplete="off"
                    persistent-hint
                    outlined
                    counter
                ></v-text-field>
            </template>
        </the-dialog-confirmation>
    </fragment>
</template>

<script>
import { PasswordMixin } from "@/Mixins";

import TheDialogConfirmation from "@/Components/TheDialogConfirmation";
import BrowserSessionsList from "./BrowserSessionsList";

export default {
    mixins: [PasswordMixin],
    components: {
        TheDialogConfirmation,
        BrowserSessionsList,
    },
    props: ["sessions"],
    data() {
        return {
            confirmingLogout: false,
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
        },

        logoutOtherBrowserSessions() {
            this.form.post(route("other-browser-sessions.destroy"), {
                preserveScroll: true,
                onSuccess: (page) => {
                    if (!this.form.hasErrors()) {
                        this.confirmingLogout = false;
                    }
                },
            });
        },
    },
};
</script>

<style>
</style>
