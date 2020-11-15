<template>
    <the-data
        :selected="selected"
        @update:selected="$emit('update:selected', $event)"
        :options="options"
        @update:options="$emit('update:options', $event)"
        :headers="headers"
        :total="total"
        :items="items"
        :loading="fetching"
    >
        <template v-slot:[`item.name`]="{ item }">
            <v-chip @click="edit(item)" :color="chip(item)" :small="dense" dark>
                {{ item.name }}
            </v-chip>
        </template>
        <template v-slot:[`item.email`]="{ item }">
            {{ item.email }}
            <v-icon v-if="item.verified" color="green">
                mdi-check-decagram
            </v-icon>
        </template>
        <template v-slot:[`item.updated_at`]="{ item }">
            {{ item.updated_at | moment("from") }}
        </template>

        <template #card="{ item }">
            <v-btn :color="chip(item)" outlined absolute right small tile top>
                {{ item.authorized ? item.role.name : "ME" }}
            </v-btn>

            <v-card-text @click="edit(item)">
                <div class="overline">
                    {{ item.updated_at | moment("from") }}
                </div>
                <div class="overline">
                    {{ item.name }}
                </div>
                <div class="subtitle-2 font-weight-bold">
                    {{ item.email }}
                    <v-icon v-if="item.verified" color="green">
                        mdi-check-decagram
                    </v-icon>
                </div>
            </v-card-text>
        </template>
    </the-data>
</template>

<script>
import { CommonMixin, PasswordMixin } from "@/Mixins";
import { ModelListMixin } from "@/Mixins/Model";

export default {
    mixins: [CommonMixin, ModelListMixin, PasswordMixin],
    data() {
        return {
            headers: [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "role.name", sortable: false },
                { text: "UpdatedAt", value: "updated_at" },
            ],
        };
    },
};
</script>

<style>
</style>
