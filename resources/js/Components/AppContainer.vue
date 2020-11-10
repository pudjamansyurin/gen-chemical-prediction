<template>
    <v-main :class="dark ? 'black' : 'grey lighten-3'">
        <v-container fluid>
            <slot></slot>

            <app-overlay-indicator></app-overlay-indicator>
        </v-container>
    </v-main>
</template>

<script>
import { CommonMixin } from "@/Mixins";
import AppOverlayIndicator from "@/Components/AppOverlayIndicator";

export default {
    mixins: [CommonMixin],
    components: {
        AppOverlayIndicator,
    },
};
</script>

<style></style>
