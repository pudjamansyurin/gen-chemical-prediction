<template>
  <fragment>
    <v-app-bar
      :collapse-on-scroll="!(selected.length > 0 || searchBox || !mobile)"
      :dense="denser"
      color="primary"
      dark
      app
    >
      <template v-if="!searchBox || !mobile">
        <v-app-bar-nav-icon @click.stop="TOGGLE_DRAWER"> </v-app-bar-nav-icon>
        <v-toolbar-title>
          <inertia-link
            :href="route(route().current())"
            class="white--text text-decoration-none"
          >
            {{ pageTitle || title }}
          </inertia-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </template>

      <template v-if="items">
        <v-text-field
          v-if="searchBox || !mobile"
          v-model="search"
          @click:append="setSearchBox(false)"
          :append-icon="searchBoxIcon"
          :autofocus="mobile"
          :dark="darker"
          label="Search"
          dense
          flat
          solo-inverted
          hide-details
        ></v-text-field>
      </template>

      <v-spacer v-if="!mobile"></v-spacer>
      <template v-if="items">
        <v-btn v-if="!searchBox && mobile" @click="setSearchBox(true)" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>

      <app-top-menu></app-top-menu>

      <template #extension v-if="canCreate">
        <template v-if="selected.length === 0">
          <v-tabs v-model="tab" align-with-title>
            <v-tab>Recent</v-tab>
            <v-tab>Mine</v-tab>
          </v-tabs>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('create')" color="green" rounded small>
            <v-icon>mdi-plus</v-icon>
            <template v-if="!mobile">Create</template>
          </v-btn>
        </template>
        <template v-else>
          <v-btn
            @click="$emit('update:selected', [])"
            class="mr-3"
            color="primary"
            rounded
            small
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title> {{ selected.length }} selected </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('delete')" color="red" rounded small>
            <v-icon>mdi-delete</v-icon>
            <template v-if="!mobile">Delete</template>
          </v-btn>
        </template>
      </template>
    </v-app-bar>
  </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { debounce } from "lodash";

import { ls, bool } from "@/Utils";
import { TOGGLE_DRAWER } from "@/Store/app/mutation-types";

import AppTopMenu from "@/Components/AppTopMenu";

export default {
    props: {
        options: {
            type: Object,
            default: () => {
                return { search: "", mine: false };
            },
        },
        selected: {
            type: Array,
            default: () => [],
        },
        pageTitle: {
            type: String,
            default: "",
        },
        canCreate: {
            type: Boolean,
            required: false,
        },
    },
    components: {
        AppTopMenu,
    },
    data() {
        return {
            searchBox: false,
        };
    },
    computed: {
        ...mapState("app", ["title"]),
        items() {
            return !!this.options.page;
        },
        searchBoxIcon() {
            let opened = this.mobile || this.options.search;
            return opened ? "mdi-magnify-close" : "mdi-magnify";
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
            if (!state && this.search) this.search = "";
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
        if (this.options.search) this.setSearchBox(true);
    },
};
</script>

<style></style>
