<template>
    <div>
        <the-simple-table :headers="headers" :items="dataset" height="200">
            <template
                v-for="header in headers"
                v-slot:[`item.${header.value}`]="{ item, index }"
            >
                {{ getValue(header, item, index) }}
            </template>
        </the-simple-table>

        <v-sheet class="my-5">
            <span>Summary: </span>
            <v-chip small>Total columns: {{shape[1]}}</v-chip>
            <v-chip small>Total rows: {{shape[0]}}</v-chip>
            <v-chip color="primary" small>Target: {{targetName}}</v-chip>
        </v-sheet>

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
    </div>
</template>

<script>
import { clone, get, head, keys } from 'lodash';

import TheSimpleTable from "@/Components/TheSimpleTable";

export default {
    components: {
        TheSimpleTable
    },
    props: {
        flash: {
            type: Object,
            default: () => ({
                'shape': [0, 0],
                'features': [],
                'dataset': [],
                'target': {}
            })
        }
    },
    data() {
        return {
            columns : ['column', 'type', 'median', 'max', 'mean', 'variance', 'std_dev'],
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
    computed: {
        headers() {
            let columns = clone(this.columns);
            let dataset = get(this.flash, 'dataset', []);
            let headers = keys(head(dataset));

            columns.push('no');
            headers.unshift('no');

            columns.push('rows');
            headers.push('rows');

            return headers
                .filter(header => {
                    return columns.includes(header);
                })
                .map(header => {
                    return {
                        text: header.replace('_', ' ').toUpperCase(),
                        value: header,
                        align: (['column', 'type'].includes(header) ? 'left' : 'right'),
                        width: (header == 'no' ? 10 : null)
                    }
                })
        },
        features() {
            return get(this.flash, 'features', []);
        },
        dataset() {
            return get(this.flash, 'dataset', []);
        },
        shape() {
            return get(this.flash, 'shape', []);
        },
        targetName() {
            return get(this.flash, 'target.name', '');
        },
    },
    methods: {
        getValue({value}, item, index) {
            let feature = this.features[item.column];

            if (value == 'no')
                return (index+1);
            if (value == 'column')
                return get(feature, 'name', '');
            if (value == 'rows')
                return get(feature, 'rows', 0);
            if (!isNaN(item[value]))
                return item[value].toFixed(2);
            return item[value];
        }
    },
}
</script>

<style>

</style>
