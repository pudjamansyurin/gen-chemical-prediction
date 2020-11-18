<template>
    <fragment>
        <app-top-bar page-title="Profile"></app-top-bar>
        <update-profile-form :profile="profile"></update-profile-form>
        <update-password-form></update-password-form>
        <browser-sessions-form :sessions="sessions"></browser-sessions-form>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import UpdateProfileForm from "./UpdateProfileForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import BrowserSessionsForm from "./BrowserSessionsForm";

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        UpdateProfileForm,
        UpdatePasswordForm,
        BrowserSessionsForm,
    },
    props: ["profile", "sessions"],
};
</script>

<style></style>
