<template>
    <v-overlay :value="isLoading" z-index="999">
        <v-progress-circular indeterminate size="64" color="white">
        </v-progress-circular>
    </v-overlay>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("app", ["isLoading"]),
    },
};
</script>

<style>
</style>
