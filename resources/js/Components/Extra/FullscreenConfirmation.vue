<template>
    <v-dialog
        v-if="mobile && !webview"
        v-model="dialogFullscreen"
        max-width="290"
    >
        <v-card :dark="darker">
            <v-card-title class="headline"> Use fullscreen? </v-card-title>
            <v-card-text>
                You are using small device screen, we can help you navigate
                easier using fullscreen mode.
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="confirmFullscreen(false)"
                >
                    No
                </v-btn>
                <v-btn color="green" dark @click="confirmFullscreen(true)">
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { FullscreenMixin } from "@/Mixins";

export default {
    mixins: [FullscreenMixin],
};
</script>

<style>
</style>
