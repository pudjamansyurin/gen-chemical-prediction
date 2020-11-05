<template>
    <v-snackbar
        v-model="snackbar"
        :color="message.type"
        :timeout="timeout"
        top
        right
    >
        <v-icon>mdi-bell</v-icon>
        <i>{{ message.text }}</i>

        <template v-slot:action="{ attrs }">
            <v-btn @click="snackbar = false" v-bind="attrs" icon dark>
                <v-icon>mdi-close-circle</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { mapState } from "vuex";
import { ns } from "@/Utils";
import { SET_MESSAGE } from "@/Store/app/mutation-types";

export default {
    data() {
        return {
            snackbar: false,
            timeout: 2000,
        };
    },
    computed: {
        ...mapState("app", ["message"]),
    },
    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === ns("app", SET_MESSAGE)) {
                if (this.message.text) this.snackbar = true;
            }
        });
    },
};
</script>

<style>
</style>
