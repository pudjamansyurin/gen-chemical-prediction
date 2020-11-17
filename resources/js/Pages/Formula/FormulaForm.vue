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
                label="Formula name"
                type="text"
                hint="This should be unique name"
                outlined
            ></v-text-field>

            <v-textarea
                v-model="form.note"
                :error-messages="form.error('note')"
                :success="!!form.error('note')"
                label="Formula note"
                type="text"
                hint="Just for documentation"
                row-height="2"
                outlined
                auto-grow
                clearable
            >
            </v-textarea>

            <field-material
                :form.sync="form"
                :matters="matters"
                :materials="materials"
                class="mb-5"
            ></field-material>

            <field-measurement
                :form.sync="form"
                :measurements="measurements"
                class="mb-5"
            ></field-measurement>

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

import FieldMaterial from './Fields/FieldMaterial'
import FieldMeasurement from './Fields/FieldMeasurement'

export default {
    mixins: [CommonMixin, ModelFormMixin],
    components: {
        FieldMaterial,
        FieldMeasurement
    },
    props: {
        matters: {
            type: Array,
            default: () => [],
        },
        materials: {
            type: Array,
            default: () => [],
        },
        measurements: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style></style>
