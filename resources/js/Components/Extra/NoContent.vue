<template>
    <v-alert :dark="dark" type="info" border="top">
        <span>{{ text }}</span>
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
        search: {
            type: String,
            defautl: "",
        },
    },
    computed: {
        text() {
            if (this.search) return `No item related to "${this.search}"`;
            return `Oops, no ${this.model} data`;
        },
    },
};
</script>

<style>
</style>
