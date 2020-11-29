<template>
    <fragment>
        <the-simple-table :headers="headers" :items="items" height="200">
            <template
                v-for="header in headers"
                v-slot:[`item.${header.value}`]="{ item, index }"
            >
                <slot :name="`item.${header.value}`" :item="item" :index="index">
                    <template v-if="header.value == 'no'">
                        <v-hover v-slot="{ hover }">
                            <span v-if="!hover">{{ index + 1 }}</span>
                            <v-icon v-else @click="$emit('remove', index)" color="red">
                                mdi-close-circle-outline
                            </v-icon>
                        </v-hover>
                    </template>
                </slot>
            </template>
        </the-simple-table>

        <v-sheet class="my-5">
            <span>Summary: </span>
            <v-chip small>Used columns: {{flash.shape[1]}}</v-chip>
            <v-chip small>Used rows: {{flash.shape[0]}}</v-chip>
        </v-sheet>
    </fragment>
</template>

<script>
import { get, keys } from 'lodash';

import TheSimpleTable from "@/Components/TheSimpleTable";

export default {
    components: {
        TheSimpleTable
    },
    data() {
        return {
            headers: [
                {
                    text: "No",
                    value: "no",
                    align: "center",
                    width: 50,
                },
                {
                    text: "Column",
                    value: "column",
                    align: "left",
                },
                {
                    text: "Median",
                    value: "median",
                    align: "right",
                },
                {
                    text: "Max",
                    value: "max",
                    align: "right",
                },
                {
                    text: "Mean",
                    value: "mean",
                    align: "right",
                },
                {
                    text: "Variance",
                    value: "variance",
                    align: "right",
                },
                {
                    text: "Std. Deviation",
                    value: "std_dev",
                    align: "right",
                },
                {
                    text: "Count",
                    value: "count",
                    align: "right"
                },
            ],
        }
    },
    computed: {
        flash() {
            return get(this.$page, 'flash', {
                shape: [],
                features: [],
                dataset: []
            });
        },
        items() {
            return this.flash.dataset.map(data => {
                let feature = this.flash.features[data.column];
                let columns = this.headers.map(el => el.value);

                return {
                    ...keys(data)
                        .filter(key => columns.includes(key))
                        .reduce((carry, key) => {
                            let value = data[key];
                            return {
                                ...carry,
                                [key] : isNaN(value) ? value : value.toFixed(2)
                            }
                        }, {}),
                    column : get(feature, 'name', 0),
                    count : get(feature, 'count', 0),
                };
            })
        },
    }
}
</script>

<style>

</style>
