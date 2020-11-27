<template>
    <v-row no-gutters>
        <v-col :class="{'mr-3' : customSplit}">
            <v-select
                v-model="customSplit"
                :items="splitOptions"
                :dense="denser"
                item-text="name"
                item-value="value"
                label="Data split"
                hint="Train & test data ratio"
                persistent-hint
                outlined
            >
            </v-select>
        </v-col>
        <v-col v-if="customSplit" :class="{'ml-3' : customSplit}">
            <v-text-field
                v-model="form.split"
                :error-messages="form.error(`split`)"
                :success="!!form.error(`split`)"
                type="number"
                label="Split ratio"
                hint="This is used for cross-validation"
                persistent-hint
                outlined
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            splitOptions: [
                { name: 'Automatic', value: 0 },
                { name: 'Custom', value: 1 },
            ],
            customSplit: 0,
            form: this.$inertia.form(
                {
                    split: 0.8
                },
                {
                    bag: `learner_train`,
                    resetOnSuccess: false
                }
            )
        }
    },
}
</script>

<style>

</style>
