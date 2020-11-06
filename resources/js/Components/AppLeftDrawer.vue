<template>
    <v-navigation-drawer
        @input="SET_DRAWER"
        :value="drawer || $vuetify.breakpoint.lgAndUp"
        :mini-variant="mini"
        :dark="dark"
        app
    >
        <v-list>
            <v-list-item
                v-if="profile.id > -1"
                :dark="dark"
                @click="mini && gotoProfile()"
                :input-value="activeProfile()"
                color="green"
                link
                two-line
            >
                <v-list-item-action>
                    <v-tooltip v-if="mini" nudge-right="12" right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon v-bind="attrs" v-on="on">
                                mdi-face-profile
                            </v-icon>
                        </template>
                        <span>Profile</span>
                    </v-tooltip>
                    <v-icon v-else>mdi-face-profile</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{ profile.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ profile.email }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-menu :nudge-width="150" offset-y left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" icon>
                                <v-icon>mdi-menu-down</v-icon>
                            </v-btn>
                        </template>

                        <v-list class="py-0" dense>
                            <v-list-item
                                @click="gotoProfile()"
                                :input-value="activeProfile()"
                            >
                                <v-list-item-icon>
                                    <v-icon>mdi-face-profile</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        Profile
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>

                            <v-list-item @click="logout()">
                                <v-list-item-icon>
                                    <v-icon>mdi-logout</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        Logout
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>

            <template v-for="(item, index) in navs">
                <template v-if="item.heading">
                    <v-subheader v-if="drawer" :key="index">
                        {{ item.heading }}
                    </v-subheader>
                </template>

                <v-divider v-else-if="item.divider" :key="index"></v-divider>

                <!-- <v-list-group
                    v-else-if="item.children"
                    :key="index"
                    v-model="item.model"
                    color="primary"
                >
                    <template v-slot:activator>
                        <v-list-item-action>
                            <v-tooltip v-if="mini" nudge-right="12" right>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-bind="attrs" v-on="on">
                                        {{ item.icon }}
                                    </v-icon>
                                </template>
                                <span>{{ item.text }}</span>
                            </v-tooltip>
                            <v-icon v-else>
                                {{ item.icon }}
                            </v-icon>
                        </v-list-item-action>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </template>

                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        :to="{ name: child.to }"
                        :dark="dark"
                        link
                    >
                        <v-list-item-action>
                            <v-tooltip v-if="mini" nudge-right="12" right>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-bind="attrs" v-on="on">
                                        {{ child.icon }}
                                    </v-icon>
                                </template>
                                <span>{{ child.text }}</span>
                            </v-tooltip>
                        </v-list-item-action>
                        <v-list-item-title>
                            {{ child.text }}
                        </v-list-item-title>
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list-group> -->

                <v-list-item
                    v-else
                    :key="index"
                    :dark="dark"
                    @click="goto(item.to)"
                    :input-value="active(item.to)"
                    color="primary"
                    link
                >
                    <v-list-item-action>
                        <v-tooltip v-if="mini" nudge-right="12" right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon v-bind="attrs" v-on="on">
                                    {{ item.icon }}
                                </v-icon>
                            </template>
                            <span>{{ item.text }}</span>
                        </v-tooltip>
                        <v-icon v-else>
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import { SET_DRAWER } from "@/Store/app/mutation-types";
import { CommonMixin, NavigationMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin, NavigationMixin],
    computed: {
        ...mapState("app", ["drawer", "profile"]),
        mini() {
            return !this.drawer && this.$vuetify.breakpoint.lgAndUp;
        },
    },
    methods: {
        ...mapMutations("app", [SET_DRAWER]),
    },
};
</script>

<style></style>
