<template>
    <fragment>
        <v-skeleton-loader v-if="!mobile" :dark="dark" type="table">
        </v-skeleton-loader>
        <v-skeleton-loader
            v-else
            v-for="n in 10"
            :key="n"
            :dark="dark"
            type="article"
            class="my-3"
        ></v-skeleton-loader>
    </fragment>
</template>

<script>
import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
};
</script>

<style>
</style>
