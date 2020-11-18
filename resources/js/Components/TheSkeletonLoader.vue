<template>
    <fragment>
        <v-skeleton-loader v-if="!mobile" :dark="darker" type="table">
        </v-skeleton-loader>
        <v-skeleton-loader
            v-else
            v-for="n in 10"
            :key="n"
            :dark="darker"
            type="article"
            class="my-3"
        ></v-skeleton-loader>
    </fragment>
</template>

<script>
export default {};
</script>

<style>
</style>
