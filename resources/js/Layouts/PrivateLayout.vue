<template>
    <v-app v-resize="onResize">
        <app-left-drawer></app-left-drawer>
        <app-bottom-nav v-if="mobile"></app-bottom-nav>

        <app-container>
            <slot></slot>
        </app-container>

        <the-snack-bar></the-snack-bar>
        <fullscreen-confirmation></fullscreen-confirmation>
        <!-- <portal-target name="modal"> </portal-target> -->
    </v-app>
</template>

<script>
import { mapMutations } from "vuex";

import TheSnackBar from "@/Components/TheSnackBar";
import AppContainer from "@/Components/AppContainer";
import AppBottomNav from "@/Components/AppBottomNav";
import AppLeftDrawer from "@/Components/AppLeftDrawer";
import FullscreenConfirmation from "@/Components/Extra/FullscreenConfirmation";

import { CommonMixin } from "@/Mixins";
import {
    SET_SIZE,
    SET_PROFILE,
    // CLEAR_PROFILE,
    SET_MESSAGE,
} from "@/Store/app/mutation-types";

export default {
    mixins: [CommonMixin],
    components: {
        AppContainer,
        AppBottomNav,
        AppLeftDrawer,
        TheSnackBar,
        FullscreenConfirmation,
    },
    methods: {
        ...mapMutations("app", [
            SET_SIZE,
            SET_PROFILE,
            // CLEAR_PROFILE,
            SET_MESSAGE,
        ]),
        onResize() {
            this.SET_SIZE({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        },
    },
    watch: {
        $page: {
            immediate: true,
            handler(page) {
                console.warn("Inertia", page);

                if (page.flash)
                    this.SET_MESSAGE({ type: "info", text: page.flash });
            },
        },
        "$page.profile": {
            immediate: true,
            handler: function (user) {
                if (user) this.SET_PROFILE(user);
                // else this.CLEAR_PROFILE();
            },
        },
    },
    mounted() {
        this.onResize();
    },
};
</script>

<style></style>
