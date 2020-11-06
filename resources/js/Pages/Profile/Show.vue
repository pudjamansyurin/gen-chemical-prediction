<template>
    <fragment>
        <app-top-bar page="Profile"></app-top-bar>

        <v-row align="center" justify="center" dense>
            <v-col cols="12">
                <update-profile-form :user="profile"></update-profile-form>
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import UpdateProfileForm from "./UpdateProfileForm";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        UpdateProfileForm,
    },
    props: ["profile"],
};
</script>

<style></style>
