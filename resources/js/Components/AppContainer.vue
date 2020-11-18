<template>
    <v-main :class="darker ? 'black' : 'grey lighten-3'">
        <v-container fluid>
            <slot></slot>

            <app-overlay-indicator></app-overlay-indicator>
        </v-container>
    </v-main>
</template>

<script>
import AppOverlayIndicator from "@/Components/AppOverlayIndicator";

export default {
    components: {
        AppOverlayIndicator,
    },
};
</script>

<style></style>
