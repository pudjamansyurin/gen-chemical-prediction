<template>
    <the-dialog-confirmation
        v-model="dialog"
        :disabled="form.processing"
        @confirmed="remove"
    >
        <template #title>Delete confirmation</template>
        <template #content>
            <p>Are you sure to delete?</p>
            <v-chip v-for="item in selected" :key="item.id" class="ma-1">
                {{ item.name }}
            </v-chip>
        </template>
    </the-dialog-confirmation>
</template>

<script>
import { ModelDeleteMixin } from "@/Mixins/Model";

export default {
    mixins: [ModelDeleteMixin],
};
</script>

<style>
</style>
