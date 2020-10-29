<template>
    <fragment>
        <v-app-bar
            :color="appBarColor"
            :collapse-on-scroll="!(selected.length || searchBox || !mobile)"
            dark
            app
        >
            <template v-if="!searchBox || !mobile">
                <v-app-bar-nav-icon
                    @click.stop="TOGGLE_DRAWER"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <span>{{ theTitle }}</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </template>

            <template v-if="crud">
                <v-text-field
                    v-if="searchBox || !mobile"
                    v-model="search"
                    :append-icon="searchBoxIcon"
                    :autofocus="mobile"
                    @click:append="setSearch(false)"
                    :dark="dark"
                    label="Search"
                    dense
                    flat
                    solo-inverted
                    hide-details
                ></v-text-field>
            </template>

            <v-spacer v-if="!mobile"></v-spacer>
            <template v-if="crud">
                <v-btn
                    v-if="!searchBox && mobile"
                    @click="setSearch(true)"
                    icon
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>

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
                            <v-list-item @click="toggleFs">
                                <v-list-item-icon>
                                    <v-icon>{{ fullscreenIcon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{
                                            fullscreen
                                                ? "Normal-screen"
                                                : "Full-screen"
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

                        <!-- <v-list-item :to="{ name: 'profile' }"> -->
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-face-profile</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Profile</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item @click="logout()">
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>

            <template v-slot:extension v-if="crud">
                <template v-if="selected.length">
                    <v-btn
                        @click="$emit('update:selected', [])"
                        fab
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-divider
                        :dark="!!selected.length"
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>
                </template>

                <template>
                    <v-toolbar-title v-if="selected.length">
                        {{ selected.length }} selected
                    </v-toolbar-title>
                    <v-tabs v-else v-model="tab" align-with-title>
                        <v-tab>Recent</v-tab>
                        <v-tab v-if="mineTab">Mine</v-tab>
                    </v-tabs>
                </template>

                <v-spacer></v-spacer>

                <template v-if="!selected.length">
                    <v-btn
                        @click="$emit('create')"
                        :fab="mobile"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-plus</v-icon>
                        <template v-if="!mobile">Create</template>
                    </v-btn>
                </template>
                <template v-else>
                    <!-- <v-btn
                        v-if="selected.length == 1"
                        @click="$emit('edit')"
                        :fab="mobile"
                        class="mr-2"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-pencil</v-icon>
                        <template v-if="!mobile">Edit</template>
                    </v-btn> -->
                    <v-btn
                        @click="$emit('delete')"
                        :fab="mobile"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-delete</v-icon>
                        <template v-if="!mobile">Delete</template>
                    </v-btn>
                </template>
            </template>
        </v-app-bar>

        <!-- fullscreen confirmation -->
        <fullscreen-confirmation></fullscreen-confirmation>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { debounce, startCase } from "lodash";
import pluralize from "pluralize";

import { ls } from "@/Utils";
import { CommonMixin, FullscreenMixin } from "@/Mixins";
import {
    TOGGLE_DRAWER,
    TOGGLE_DENSE,
    TOGGLE_DARK,
} from "@/Store/app/mutation-types";
// import { LOGOUT } from "@/Store/app/action-types";
import FullscreenConfirmation from "@/Components/FullscreenConfirmation";

export default {
    mixins: [CommonMixin, FullscreenMixin],
    props: {
        value: {
            type: Object,
            default: () => {},
        },
        page: {
            type: String,
            default: "",
        },
        selected: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {},
        },
        crud: {
            type: Boolean,
            default: false,
        },
        mineTab: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        FullscreenConfirmation,
    },
    data() {
        return {
            searchBox: false,
            search: "",
            tab: 0,
        };
    },
    computed: {
        ...mapState("app", ["title", "dark", "dense"]),
        theTitle() {
            return `${pluralize(startCase(this.page))}`;
        },
        appBarColor() {
            return this.dark ? "grey darken-3" : "primary";
        },
        searchBoxIcon() {
            return this.mobile || this.search
                ? "mdi-magnify-close"
                : "mdi-magnify";
        },
        darkIcon() {
            return this.dark ? "mdi-brightness-1" : "mdi-brightness-3";
        },
        denseIcon() {
            return this.dense ? "mdi-table" : "mdi-table-large";
        },
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DENSE, TOGGLE_DRAWER, TOGGLE_DARK]),
        // ...mapActions("app", [LOGOUT]),
        setSearch(state) {
            if (!state) this.search = "";

            this.searchBox = state;
        },
        logout() {
            // this.LOGOUT()
            //     .then(() => this.$router.push({ name: "login" }))
            //     .catch((e) => eHandler(e));
        },
    },
    watch: {
        search: debounce(function (term) {
            this.$emit("input", {
                ...this.value,
                page: 1,
                search: term,
            });
        }, 500),
        tab: function (mine) {
            this.$emit("input", {
                ...this.value,
                page: 1,
                mine,
            });
        },
    },
};
</script>

<style></style>
