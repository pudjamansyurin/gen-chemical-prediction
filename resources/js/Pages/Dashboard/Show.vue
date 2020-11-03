<template>
    <private-layout>
        <app-top-bar page="Dashboard"></app-top-bar>
    </private-layout>
</template>

<script>
import { CommonMixin } from "@/Mixins";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";

export default {
    mixins: [CommonMixin],
    components: {
        PrivateLayout,
        AppTopBar,
    },
};
</script>

<style></style>
