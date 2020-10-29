<template>
    <v-dialog
        v-if="mobile && !webview"
        v-model="dialogFullscreen"
        max-width="290"
    >
        <v-card :dark="dark">
            <v-card-title class="headline"> Use fullscreen? </v-card-title>
            <v-card-text>
                You are using small device screen, we can help you navigate
                easier using fullscreen mode.
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="confirmFs(false)">
                    No
                </v-btn>
                <v-btn color="green" dark @click="confirmFs(true)"> Yes </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { CommonMixin, FullscreenMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin, FullscreenMixin],
};
</script>

<style>
</style>
