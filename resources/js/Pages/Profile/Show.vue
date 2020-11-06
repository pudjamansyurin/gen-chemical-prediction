<template>
    <fragment>
        <app-top-bar page="Profile"></app-top-bar>

        <v-row align="center" justify="center" dense>
            <v-col cols="12">
                <v-card>Profile Information</v-card>
            </v-col>
        </v-row>
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
