<template>
    <v-alert :dark="darker" type="info" border="left" outlined>
        <span>{{ text }}</span>
    </v-alert>
</template>

<script>
export default {
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
