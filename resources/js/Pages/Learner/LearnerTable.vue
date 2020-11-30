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
                            <v-icon v-else @click="remove(item, index)" color="red">
                                mdi-close-circle-outline
                            </v-icon>
                        </v-hover>
                    </template>
                    <template v-else-if="header.value == 'column'">
                        {{ getFeatureName(item) }}
                    </template>
                    <template v-else-if="header.value == 'count'">
                        {{ getFeatureCount(item) }}
                    </template>
                </slot>
            </template>
        </the-simple-table>

        <v-sheet class="my-5">
            <span>Summary: </span>
            <v-chip small>Used columns: {{ numColumns }}</v-chip>
            <v-chip small>Used rows: {{ numRows }}</v-chip>
        </v-sheet>
    </fragment>
</template>

<script>
import { get, keys } from 'lodash';

import TheSimpleTable from "@/Components/TheSimpleTable";

export default {
    props: {
        numRows: {
            type: Number,
            default: 0
        },
        numColumns: {
            type: Number,
            default: 0
        },
    },
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
                    round: true,
                },
                {
                    text: "Max",
                    value: "max",
                    align: "right",
                    round: true,
                },
                {
                    text: "Mean",
                    value: "mean",
                    align: "right",
                    round: true,
                },
                {
                    text: "Variance",
                    value: "variance",
                    align: "right",
                    round: true,
                },
                {
                    text: "Std. Deviation",
                    value: "std_dev",
                    align: "right",
                    round: true,
                },
                {
                    text: "Count",
                    value: "count",
                    align: "right"
                },
            ],
            items: [],
        }
    },
    methods: {
        getFeature(item) {
            return get(this.$page, `flash.features.${item.column}`);
        },
        getFeatureName(item) {
            return get(this.getFeature(item), 'name', '');
        },
        getFeatureCount(item) {
            return get(this.getFeature(item), 'count', 0);
        },
        parseItems(dataset) {
            return dataset.map(data => {
                let feature = this.getFeature(data);
                let columns = this.headers.map(el => el.value);

                return keys(data)
                        .filter(key => columns.includes(key))
                        .reduce((carry, key) => {
                            let value = data[key];
                            let column = this.headers.find(el => el.value == key);

                            return {
                                ...carry,
                                [key] : column.round ? value.toFixed(2) : value
                            }
                        }, {});
            })
        },
        remove(item, index) {
            let feature = this.getFeature(item);

            this.items.splice(index, 1);
            this.$emit('remove', feature.id);
        }
    },
    watch: {
        '$page.flash.dataset': {
            deep: true,
            immediate: true,
            handler(v) {
                this.items = this.parseItems(v);
            }
        }
    },
}
</script>

<style>

</style>
