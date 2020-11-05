<template>
    <v-app v-resize="onResize">
        <app-left-drawer></app-left-drawer>
        <app-bottom-nav v-if="mobile"></app-bottom-nav>

        <app-container>
            <slot></slot>
        </app-container>

        <the-snack-bar></the-snack-bar>
        <!-- <portal-target name="modal"> </portal-target> -->
    </v-app>
</template>

<script>
import { mapMutations } from "vuex";

import TheSnackBar from "@/Components/TheSnackBar";
import AppContainer from "@/Components/AppContainer";
import AppBottomNav from "@/Components/AppBottomNav";
import AppLeftDrawer from "@/Components/AppLeftDrawer";

import { CommonMixin } from "@/Mixins";
import {
    SET_SIZE,
    SET_PROFILE,
    CLEAR_PROFILE,
} from "@/Store/app/mutation-types";

export default {
    mixins: [CommonMixin],
    components: {
        AppContainer,
        AppBottomNav,
        AppLeftDrawer,
        TheSnackBar,
    },
    methods: {
        ...mapMutations("app", [SET_SIZE, SET_PROFILE, CLEAR_PROFILE]),
        onResize() {
            this.SET_SIZE({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        },
    },
    mounted() {
        this.onResize();
    },
    watch: {
        $page: {
            immediate: true,
            handler(val) {
                console.log(val);
            },
        },
        "$page.profile": {
            handler: function (user) {
                console.warn(user);
                if (user) this.SET_PROFILE(user);
                else this.CLEAR_PROFILE();
            },
        },
    },
};
</script>

<style></style>
