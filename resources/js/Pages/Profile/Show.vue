<template>
    <fragment>
        <app-top-bar page="Profile"></app-top-bar>

        <v-row align="center" justify="center" dense>
            <v-col cols="12">
                <update-profile-form :user="profile"></update-profile-form>
                <browser-sessions-form
                    :sessions="sessions"
                ></browser-sessions-form>
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import UpdateProfileForm from "./UpdateProfileForm";
import BrowserSessionsForm from "./BrowserSessionsForm";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        UpdateProfileForm,
        BrowserSessionsForm,
    },
    props: ["profile", "sessions"],
};
</script>

<style></style>
