<template>
    <the-dialog-form
        v-model="dialog"
        :title="formTitle"
        :disabled="disabled"
        :readonly="readonly"
        @submit="save"
    >
        <v-form @submit.prevent="save" :disabled="disabled || readonly">
            <v-text-field
                v-model="form.name"
                :error-messages="form.error('name')"
                :success="!!form.error('name')"
                :autofocus="!mobile"
                label="Material name"
                type="text"
                hint="This should be unique name"
                outlined
            ></v-text-field>

            <v-autocomplete
                v-model="form.matter_id"
                :items="matters"
                :error-messages="form.error('matter_id')"
                :success="!!form.error('matter_id')"
                :attach="mobile"
                item-text="name"
                item-value="id"
                label="Matter"
                hint="Category for this material"
                chips
                outlined
            ></v-autocomplete>

            <v-btn
                v-if="!readonly"
                :disabled="disabled"
                class="d-none"
                type="submit"
            ></v-btn>
        </v-form>
    </the-dialog-form>
</template>

<script>
import { CommonMixin } from "@/Mixins";
import { ModelFormMixin } from "@/Mixins/Model";

export default {
    mixins: [CommonMixin, ModelFormMixin],
    props: {
        matters: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style></style>
