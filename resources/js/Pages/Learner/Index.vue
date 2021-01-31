<template>
    <fragment>
        <app-top-bar page-title="Machine Learning"></app-top-bar>

        <v-stepper v-model="stepper" vertical>
            <template v-for="(step, idx) in steps">
                <v-stepper-step :key="`step.${idx}`" :complete="stepper > (idx+1)" :step="(idx+1)">
                    {{ step.title }}
                    <small>{{ step.subtitle }}</small>
                </v-stepper-step>
                <v-stepper-content :key="`content.${idx}`" :step="(idx+1)" class="py-2">
                    <learner-dataset
                        v-if="step.title == 'DATASET'"
                        :materials="materials"
                        :measurements="measurements"
                        @continue="next"
                    >
                    </learner-dataset>
                    <learner-train
                        v-else-if="step.title == 'TRAIN'"
                        @continue="next"
                        @back="back"
                    >
                    </learner-train>
                    <template v-else>
                        <v-card
                            color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                        ></v-card>
                        <v-btn
                            @click="stepper = (idx+2)"
                            color="primary"
                        >
                            Continue
                        </v-btn>
                        <v-btn
                            @click="stepper = (idx)"
                            text>
                            Cancel
                        </v-btn>
                    </template>
                </v-stepper-content>
            </template>
        </v-stepper>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import AppTopBar from "@/Components/AppTopBar";
import LearnerDataset from "./LearnerDataset";
import LearnerTrain from './LearnerTrain';

export default {
    layout: PrivateLayout,
    components: {
        AppTopBar,
        LearnerDataset,
        LearnerTrain
    },
    props: [
        'materials',
        'measurements',
        'flash'
    ],
    data() {
        return {
            steps: [
                {
                    title: 'DATASET',
                    subtitle: 'Prepare data for training'
                },
                {
                    title: 'TRAIN',
                    subtitle: 'Train the learner'
                },
                {
                    title: 'MODELS',
                    subtitle: 'Check the model correlation'
                },
                {
                    title: 'EVALUATE',
                    subtitle: 'Cross validate the model'
                },
                {
                    title: 'TEST',
                    subtitle: 'Test the model'
                },
            ],
            stepper: 1,
        };
    },
    methods: {
        next() {
            this.stepper += 1;
        },
        back() {
            if (this.stepper > 0)
                this.stepper -= 1;
        }
    },
};
</script>

<style></style>
