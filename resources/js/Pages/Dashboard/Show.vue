<template>
    <fragment>
        <app-top-bar page="Dashboard"></app-top-bar>

        <div>Nothing yet.</div>
    </fragment>
</template>

<script>
import { CommonMixin } from "@/Mixins";

import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";

export default {
    mixins: [CommonMixin],
    layout: PrivateLayout,
    components: {
        AppTopBar,
    },
};
</script>

<style></style>
