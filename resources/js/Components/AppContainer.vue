<template>
    <v-main :class="dark ? 'black' : 'grey lighten-3'">
        <v-container fluid>
            <slot></slot>
            <!-- loader overlay -->
            <v-overlay v-if="mobile" :value="isLoading" absolute>
                <v-progress-circular indeterminate size="64" color="white">
                </v-progress-circular>
            </v-overlay>
        </v-container>
    </v-main>
</template>

<script>
import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
};
</script>

<style></style>
