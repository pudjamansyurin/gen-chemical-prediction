<template>
    <v-form @submit.prevent="fetch" :disabled="form.processing">
        <v-card class="py-2">
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
                    <template v-slot:item="{item}">
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
                    return-object
                >
                    <template v-slot:item="{item}">
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
                    return-object
                >
                    <template v-slot:item="{item}">
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

                <learner-table v-if="hasDataset">
                </learner-table>
            </v-card-text>

            <v-card-actions>
                <v-btn type="submit" color="primary">
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
        stepper: {
            type: Number,
            default: 1,
        },
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
                    excluded_materials: [],
                },
                {
                    bag: `learner_dataset`,
                    resetOnSuccess: false
                }
            ),

        }
    },
    computed: {
        hasDataset() {
            return !!get(this.$page, 'flash.dataset');
        }
    },
    methods: {
        getType(el) {
            if (el.primary) return 'Primary';
            if (el.primary === 0) return 'Secondary';
        },
        updateStepper() {
            this.$emit('update:stepper', this.stepper+1);
        },
        fetch() {
            this.form.post(route('learner.dataset'), {
                preserveScroll: true,
                onSuccess: page => {
                    // if (!this.form.hasErrors())
                        // this.updateStepper();
                }
            });
        },
    },
}
</script>

<style>

</style>
