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
import { CommonMixin } from "@/Mixins";
import { ModelDeleteMixin } from "@/Mixins/Model";

import { User as model} from "@/Config/models";

export default {
    mixins: [CommonMixin, ModelDeleteMixin],
    data() {
        return {
            model
        };
    },
};
</script>

<style>
</style>
