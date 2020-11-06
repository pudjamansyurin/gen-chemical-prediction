<template>
    <v-alert :dark="dark" type="info" border="top">
        <span>Oops, no {{ model }} data.</span>
    </v-alert>
</template>

<script>
import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
    props: {
        model: {
            type: String,
            defautl: "",
        },
    },
};
</script>

<style>
</style>
