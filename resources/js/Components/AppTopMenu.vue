<template>
    <v-menu :nudge-width="150" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-card :dark="dark">
            <v-list class="py-0" dense>
                <v-list-item @click="TOGGLE_DARK">
                    <v-list-item-icon>
                        <v-icon>{{ darkIcon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ dark ? "Lighter" : "Darker" }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <template v-if="!webview">
                    <v-list-item @click="toggleFullscreen">
                        <v-list-item-icon>
                            <v-icon>{{ iconFullscreen }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{
                                    fullscreen ? "Normal-screen" : "Full-screen"
                                }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                </template>

                <template v-if="!mobile">
                    <v-list-item @click="TOGGLE_DENSE">
                        <v-list-item-icon>
                            <v-icon>{{ denseIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ dense ? "Bigger" : "Smaller" }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                </template>

                <v-list-item @click="logout()">
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title> Logout </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
import { mapMutations } from "vuex";

import { TOGGLE_DENSE, TOGGLE_DARK } from "@/Store/app/mutation-types";
import { CommonMixin, NavigationMixin, FullscreenMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin, NavigationMixin, FullscreenMixin],
    computed: {
        darkIcon() {
            return this.dark ? "mdi-brightness-1" : "mdi-brightness-3";
        },
        denseIcon() {
            return this.dense ? "mdi-table" : "mdi-table-large";
        },
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DENSE, TOGGLE_DARK]),
    },
};
</script>

<style>
</style>
