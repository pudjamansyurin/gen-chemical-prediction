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

            <formula-form-material
                :form="form"
                :matters="matters"
                :materials="materials"
            ></formula-form-material>
            <br />
            <formula-form-measurement
                :form="form"
                :measurements="measurements"
            ></formula-form-measurement>

            <!-- <v-autocomplete
                v-model="form.materials"
                :items="materials"
                :error-messages="form.error('materials')"
                :success="!!form.error('materials')"
                item-text="name"
                item-value="id"
                label="Materials"
                hint="Materials used for this formula"
                chips
                outlined
                attach
                multiple
                return-object
                deletable-chips
            ></v-autocomplete>

            <v-text-field
                v-for="(material, idx) in form.materials"
                :key="`material.${material.id}`"
                v-model="material.value"
                :error-messages="form.error(`materials[${idx}].value`)"
                :success="!!form.error(`materials[${idx}].value`)"
                :label="`Value: ${getFromList(materials, material).name}`"
                type="text"
                hint="Percentage value for this material"
                suffix="%"
                outlined
            ></v-text-field>

            <v-autocomplete
                v-model="form.measurements"
                :items="measurements"
                :error-messages="form.error('measurements')"
                :success="!!form.error('measurements')"
                item-text="name"
                item-value="id"
                label="Measurements"
                hint="Measurements used for this formula"
                chips
                outlined
                attach
                multiple
                deletable-chips
            ></v-autocomplete>

            <v-text-field
                v-for="(measurement, idx) in form.measurements"
                :key="`measurement.${measurement.id}`"
                v-model="measurement.value"
                :error-messages="form.error(`measurements[${idx}].value`)"
                :success="!!form.error(`measurements[${idx}].value`)"
                :label="`Result: ${
                    getFromList(measurements, measurement).name
                }`"
                type="text"
                hint="Result value for this measurement"
                outlined
            ></v-text-field> -->

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

import FormulaFormMaterial from './FormulaFormMaterial'
import FormulaFormMeasurement from './FormulaFormMeasurement'

export default {
    mixins: [CommonMixin, ModelFormMixin],
    components: {
        FormulaFormMaterial,
        FormulaFormMeasurement
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
