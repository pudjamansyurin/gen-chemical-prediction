<template>
    <v-overlay v-if="mobile" :value="isLoading" absolute>
        <v-progress-circular indeterminate size="64" color="white">
        </v-progress-circular>
    </v-overlay>
</template>

<script>
import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
};
</script>

<style>
</style>
