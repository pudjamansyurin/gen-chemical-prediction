<template>
    <fragment>
        <the-simple-table :headers="headers" :items="flash.dataset" height="200">
            <template
                v-for="header in headers"
                v-slot:[`item.${header.value}`]="{ item, index }"
            >
                <v-hover v-if="header.value == 'no'" v-slot="{ hover }">
                    <span v-if="!hover">{{ index + 1 }}</span>
                    <v-icon v-else @click="$emit('remove', index)" color="red">
                        mdi-close-circle-outline
                    </v-icon>
                </v-hover>
                <template v-else>
                    {{ getValue(header, item, index) }}
                </template>
            </template>
        </the-simple-table>

        <v-sheet class="my-5">
            <span>Summary: </span>
            <v-chip small>Total columns: {{flash.shape[1]}}</v-chip>
            <v-chip small>Total rows: {{flash.shape[0]}}</v-chip>
            <v-chip color="primary" small>Target: {{flash.target.name}}</v-chip>
        </v-sheet>
    </fragment>
</template>

<script>
import { clone, get, head, keys } from 'lodash';

import TheSimpleTable from "@/Components/TheSimpleTable";

export default {
    components: {
        TheSimpleTable
    },
    data() {
        return {
            columns : [
                'column',
                'type',
                'median',
                'max',
                'mean',
                'variance',
                'std_dev'
            ],
        }
    },
    computed: {
        headers() {
            let columns = clone(this.columns);
            let dataset = this.flash.dataset;
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
                        align: this.getColumnAlign(header),
                        width: (header == 'no' ? 40 : null)
                    }
                })
        },
        flash() {
            return get(this.$page, 'flash', {
                shape: [],
                features: [],
                dataset: [],
                target: {
                    name: ''
                }
            });
        },
    },
    methods: {
        getColumnAlign(header) {
            if (header == 'no') return 'center';
            return (['column', 'type'].includes(header) ? 'left' : 'right');
        },
        getValue({value}, item, index) {
            let feature = this.flash.features[item.column];

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
