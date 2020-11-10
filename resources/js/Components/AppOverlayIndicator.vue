<template>
    <v-overlay :value="isLoading" z-index="999">
        <v-progress-circular indeterminate size="64" color="white">
        </v-progress-circular>
    </v-overlay>
</template>

<script>
import { mapGetters } from "vuex";

import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
    computed: {
        ...mapGetters("app", ["isLoading"]),
    },
};
</script>

<style>
</style>
