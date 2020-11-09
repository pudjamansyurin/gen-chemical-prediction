<template>
    <fragment>
        <v-row>
            <v-col cols="12" sm="4" :class="{ 'white--text': dark }">
                <div class="text-h6">Browser Sessions</div>
                <div class="text-caption">
                    Manage and logout your active sessions on other browsers and
                    devices.
                </div>
            </v-col>
            <v-col cols="12" sm="8">
                <v-card :dark="dark">
                    <v-card-text>
                        <!-- Other Browser Sessions -->
                        <v-list two-line>
                            <template v-for="(session, index) in sessions">
                                <v-list-item :key="`item-${index}`">
                                    <v-list-item-icon>
                                        <v-icon>
                                            {{
                                                session.agent.is_desktop
                                                    ? "mdi-monitor"
                                                    : "mdi-cellphone-android"
                                            }}
                                        </v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ session.agent.platform }} -
                                            {{ session.agent.browser }}
                                        </v-list-item-title>

                                        <v-list-item-subtitle>
                                            {{ session.ip_address }}

                                            <v-chip
                                                v-if="session.is_current_device"
                                                color="primary"
                                                small
                                            >
                                                This device
                                            </v-chip>
                                            <v-chip v-else small>
                                                Last active
                                                {{ session.last_active }}
                                            </v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider
                                    :key="`divider-${index}`"
                                ></v-divider>
                            </template>
                        </v-list>
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
                                :disabled="isLoading || sessions.length == 1"
                                @click="confirmLogout"
                                :dark="sessions.length > 1 || dark"
                                color="red"
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
                    :disabled="isLoading"
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
import { cloneDeep } from "lodash";

import { CommonMixin, PasswordMixin } from "@/Mixins";
import { User } from "@/Config/models";

import TheDialogConfirmation from "@/Components/TheDialogConfirmation";

export default {
    mixins: [CommonMixin, PasswordMixin],
    components: {
        TheDialogConfirmation,
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
                onStart: (visit) => this.START_LOADING(),
                onFinish: () => this.STOP_LOADING(),
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
