<template>
    <v-form @submit.prevent="fetch" :disabled="form.processing">
        <v-card>
            <v-card-text>
                <v-autocomplete
                    v-model="form.measurement_id"
                    :items="measurements"
                    :error-messages="form.error(`measurement_id`)"
                    :success="!!form.error(`measurement_id`)"
                    :dense="denser"
                    item-text="name"
                    item-value="id"
                    label="Target"
                    hint="The target measurement to predict"
                    persistent-hint
                    outlined
                    chips
                >
                    <template v-slot:item="{ item }">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ getType(item) }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-autocomplete>

                <v-autocomplete
                    v-model="form.required_materials"
                    :items="materials"
                    :error-messages="form.error(`required_materials`)"
                    :success="!!form.error(`required_materials`)"
                    :dense="denser"
                    item-text="name"
                    item-value="id"
                    label="Required materials"
                    hint="Use only formula that contains these materials"
                    persistent-hint
                    outlined
                    chips
                    deletable-chips
                    multiple
                >
                    <template v-slot:item="{ item }">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.matter.name }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-autocomplete>

                <v-autocomplete
                    v-model="form.excluded_materials"
                    :items="materials"
                    :error-messages="form.error(`excluded_materials`)"
                    :success="!!form.error(`excluded_materials`)"
                    :dense="denser"
                    item-text="name"
                    item-value="id"
                    label="Excluded materials"
                    hint="Do not use formula that contains these materials"
                    persistent-hint
                    outlined
                    chips
                    deletable-chips
                    multiple
                >
                    <template v-slot:item="{ item }">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.matter.name }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-autocomplete>

                <learner-table
                    v-if="hasDataset"
                    :required-materials="form.required_materials"
                    :num-rows="numRows"
                    :num-columns="numColumns"
                    @remove="onRemove"
                >
                </learner-table>
            </v-card-text>

            <v-card-actions>
                <v-btn type="submit" color="primary">
                    <span v-if="hasDataset">RE-</span>FILTER
                </v-btn>

                <v-btn v-if="canContinue" @click="$emit('continue')" color="primary" text>
                    Continue
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
import { get } from "lodash";

import LearnerTable from "./LearnerTable";

export default {
    components: {
        LearnerTable
    },
    props: {
        materials: {
            type: Array,
            default: () => []
        },
        measurements: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            form: this.$inertia.form(
                {
                    measurement_id: -1,
                    required_materials: [],
                    excluded_materials: []
                },
                {
                    bag: `learner_dataset`,
                    resetOnSuccess: false
                }
            )
        };
    },
    computed: {
        hasDataset() {
            return !!get(this.$page, "flash.dataset");
        },
        numColumns() {
            return get(this.$page, "flash.shape.1", 0);
        },
        numRows() {
            return get(this.$page, "flash.shape.0", 0);
        },
        requiredMaterialsOptions() {
            return this.materialsOptions(this.form.excluded_materials);
        },
        excludedMaterialsOptions() {
            return this.materialsOptions(this.form.required_materials);
        },
        canContinue() {
            return this.hasDataset && this.numRows && !this.form.hasErrors();
        }
    },
    methods: {
        materialsOptions(filter) {
            return this.materials.filter(el => {
                return !filter.includes(el.id);
            });
        },
        getType(el) {
            if (el.primary) return "Primary";
            if (el.primary === 0) return "Secondary";
        },
        fetch() {
            this.form.post(route("learner.dataset"), {
                preserveScroll: true,
                onSuccess: page => {}
            });
        },
        onRemove(featureId) {
            if (!this.form.excluded_materials.includes(featureId))
                this.form.excluded_materials.push(featureId);
        }
    }
};
</script>

<style></style>
