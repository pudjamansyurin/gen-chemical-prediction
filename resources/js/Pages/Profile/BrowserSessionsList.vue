<template>
    <v-list two-line>
        <template v-for="(session, index) in sessions">
            <v-list-item :key="`item-${index}`">
                <v-list-item-icon>
                    <v-icon>
                        {{
                            session.agent.is_desktop
                                ? "mdi-monitor"
                                : "mdi-cellphone-android"
                        }}
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ session.agent.platform }} -
                        {{ session.agent.browser }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                        {{ session.ip_address }}

                        <v-chip
                            v-if="session.is_current_device"
                            color="primary"
                            small
                        >
                            This device
                        </v-chip>
                        <v-chip v-else small>
                            Last active
                            {{ session.last_active }}
                        </v-chip>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider :key="`divider-${index}`"></v-divider>
        </template>
    </v-list>
</template>

<script>
export default {
    props: ["sessions"],
};
</script>

<style>
</style>
