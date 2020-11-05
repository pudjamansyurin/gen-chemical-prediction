<template>
    <v-snackbar
        :value="message.text"
        :color="message.type"
        :timeout="timeout"
        top
        right
    >
        <v-icon>mdi-bell</v-icon>
        <i>{{ message.text }}</i>
        <!-- <v-btn @click="snackbar = false" icon dark>
                <v-icon>mdi-close-circle</v-icon>
            </v-btn> -->
    </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            timeout: 2000,
        };
    },
    computed: {
        ...mapState("app", ["message"]),
        // snackbar() {
        //     return this.message.text; // && this.$route.name != "error" ;
        // },
    },
};
</script>

<style>
</style>
