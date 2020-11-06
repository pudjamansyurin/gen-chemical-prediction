<template>
    <fragment>
        <v-app-bar
            :color="appBarColor"
            :collapse-on-scroll="!(selected.length || searchBox || !mobile)"
            dark
            app
        >
            <template v-if="!searchBox || !mobile">
                <v-app-bar-nav-icon @click.stop="TOGGLE_DRAWER">
                </v-app-bar-nav-icon>
                <v-toolbar-title>
                    <inertia-link
                        :href="route(route().current())"
                        class="white--text text-decoration-none"
                    >
                        {{ pageTitle }}
                    </inertia-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </template>

            <template v-if="crud">
                <v-text-field
                    v-if="searchBox || !mobile"
                    v-model="search"
                    @click:append="setSearchBox(false)"
                    :append-icon="searchBoxIcon"
                    :autofocus="mobile"
                    :dark="dark"
                    :loading="isLoading"
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
                    @click="setSearchBox(true)"
                    icon
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>

            <app-top-menu></app-top-menu>

            <template #extension v-if="crud">
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
import { debounce } from "lodash";

import { ls, bool } from "@/Utils";
import { CommonMixin } from "@/Mixins";
import { TOGGLE_DRAWER } from "@/Store/app/mutation-types";

import AppTopMenu from "@/Components/AppTopMenu";
import FullscreenConfirmation from "@/Components/Extra/FullscreenConfirmation";

export default {
    mixins: [CommonMixin],
    props: {
        options: {
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
            default: () => {
                return { search: "", mine: false };
            },
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
        AppTopMenu,
    },
    data() {
        return {
            searchBox: false,
        };
    },
    computed: {
        ...mapState("app", ["title", "dark", "dense"]),
        pageTitle() {
            return this.page.toUpperCase();
        },
        appBarColor() {
            return this.dark ? "grey darken-3" : "primary";
        },
        searchBoxIcon() {
            let opened = this.mobile || this.options.search;
            return `mdi-magnify${opened ? "-close" : ""}`;
        },
        search: {
            get() {
                return this.options.search;
            },
            set(value) {
                this.updateOptions({ search: value });
            },
        },
        tab: {
            get() {
                return Number(this.options.mine);
            },
            set(value) {
                this.updateOptions({ mine: bool(value) });
            },
        },
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DRAWER]),
        setSearchBox(state) {
            if (!state) this.search = "";
            this.searchBox = state;
        },
        updateOptions(params) {
            this.$emit("update:options", {
                ...this.options,
                ...params,
                page: 1,
            });
        },
    },
    mounted() {
        if (this.options.search) {
            this.setSearchBox(true);
        }
    },
};
</script>

<style></style>
