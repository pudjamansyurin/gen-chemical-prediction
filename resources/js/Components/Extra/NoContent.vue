<template>
    <v-alert :dark="dark" type="info" border="left" outlined>
        <span>{{ text }}</span>
    </v-alert>
</template>

<script>
import { CommonMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin],
    props: {
        search: {
            type: String,
            defautl: "",
        },
    },
    computed: {
        text() {
            if (this.search) return `No item related to "${this.search}".`;
            return `Oops, no data found.`;
        },
    },
};
</script>

<style>
</style>
