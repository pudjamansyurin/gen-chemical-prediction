<template>
    <the-simple-table v-if="!mobile" :headers="headers" :items="_form.measurements">
        <template v-slot:no="{ index }">
            <span v-if="readonly">{{ index + 1 }}</span>
            <v-hover v-else v-slot="{ hover }" >
                <span v-if="!hover">{{ index + 1 }}</span>
                <v-icon v-else @click="remove(index)" color="red">
                    mdi-close-circle-outline
                </v-icon>
            </v-hover>
        </template>
        <template v-slot:name="{ item, index }">
            <v-autocomplete
                :value="item.id"
                @change="change(index, $event)"
                :items="list(item)"
                :error-messages="_form.error(`measurements.${index}.id`)"
                :success="!!_form.error(`measurements.${index}.id`)"
                item-text="name"
                item-value="id"
                hide-details="auto"
                flat
                outlined
                dense
                return-object
            ></v-autocomplete>
        </template>
        <template v-slot:type="{ item, index }">
            {{ getType(item) || '-' }}
        </template>
        <template v-slot:value="{ item, index }">
            <v-text-field
                v-model.number="item.value"
                :error-messages="_form.error(`measurements.${index}.value`)"
                :success="!!_form.error(`measurements.${index}.value`)"
                type="number"
                hide-details="auto"
                reverse
                flat
                outlined
                dense
            ></v-text-field>
        </template>

        <template v-slot:footer>
            <tr class="font-weight-bold">
                <td>
                    <v-icon
                        v-if="!readonly"
                        @click="add()"
                        :disabled="disableAdd"
                        color="primary"
                    >
                        mdi-plus-circle-outline
                    </v-icon>
                </td>
                <td :colspan="headers.length - 1"></td>
            </tr>
        </template>
    </the-simple-table>

    <the-simple-iterator
        v-else
        :headers="headers"
        :items="_form.measurements"
        @remove="remove"
    >
        <template #header="{ item, index }">
            <span class="text-subtitle-1">{{ item.name }}</span>
            <v-spacer></v-spacer>
            <v-icon v-if="!readonly" @click="remove(index)" :disabled="disabled" color="red">
                mdi-close-circle-outline
            </v-icon>
        </template>

        <template v-slot:no="{ index }">
            {{ index + 1 }}
        </template>
        <template v-slot:name="{ item, index }">
            <v-autocomplete
                :value="item.id"
                @change="change(index, $event)"
                :items="list(item)"
                :error-messages="_form.error(`measurements.${index}.id`)"
                :success="!!_form.error(`measurements.${index}.id`)"
                item-text="name"
                item-value="id"
                hide-details="auto"
                flat
                outlined
                dense
                return-object
            ></v-autocomplete>
        </template>
        <template v-slot:type="{ item, index }">
            {{ getType(item) || '-' }}
        </template>
        <template v-slot:value="{ item, index }">
            <v-text-field
                v-model.number="item.value"
                :error-messages="_form.error(`measurements.${index}.value`)"
                :success="!!_form.error(`measurements.${index}.value`)"
                type="number"
                hide-details="auto"
                reverse
                flat
                outlined
                dense
            ></v-text-field>
        </template>

        <template #footer>
            <v-list-item>
                <v-btn v-if="!readonly" @click="add()" :disabled="disableAdd" color="primary" block>
                    <v-icon dark>
                        mdi-plus-circle-outline
                    </v-icon> Measurements
                </v-btn>
            </v-list-item>
        </template>
    </the-simple-iterator>
</template>

<script>
import { CommonMixin } from "@/Mixins";

import TheSimpleTable from "@/Components/TheSimpleTable";
import TheSimpleIterator from "@/Components/TheSimpleIterator";

export default {
    mixins: [CommonMixin],
    components: {
        TheSimpleTable,
        TheSimpleIterator
    },
    props: {
        form: {
            type: Object,
            default: () => {}
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        measurements: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            headers: [
                {
                    text: "No",
                    value: "no",
                    align: "center",
                    width: 8,
                },
                {
                    text: "Measurement",
                    value: "name",
                    align: "left",
                },
                {
                    text: "Type",
                    value: "type",
                    align: "left",
                    width: 200,
                },
                {
                    text: "Value",
                    value: "value",
                    align: "right",
                    width: 150,
                },
            ],
        }
    },
    computed: {
        _form: {
            get() {
                return this.form;
            },
            set(value) {
                this.$emit("update:form", value);
            },
        },
        disableAdd() {
            let hasUnFilled = this._form.measurements.some((m) => m.id <= 0);
            let maxListReached = this._form.measurements.length == this.measurements.length;

            return this.disabled || hasUnFilled || maxListReached;
        }
    },
    methods: {
        getType({primary}) {
            if (primary) return 'Primary';
            if (primary === 0) return 'Non-Primary';
        },
        list({id: measurementId}) {
            let ids = this._form.measurements
                            .filter(m => m.id != measurementId)
                            .map(m => m.id)

            return this.measurements.filter((m) => !ids.includes(m.id))
        },
        change(idx, {id, primary}) {
            this._form.measurements.splice(idx, 1, {
                ...this._form.measurements[idx],
                id,
                primary
            })
        },
        remove(idx) {
            this._form.measurements.splice(idx, 1);
        },
        add() {
            this._form.measurements.push({
                id: -1,
                value: null,
                primary : null,
            })
        }
    },
    watch: {
        '_form.measurements.length' : {
            immediate: true,
            handler(v) {
                if(v == 0) this.add()
            }
        },
        '_form.measurements' : {
            immediate: true,
            handler(v) {
                console.warn(v);
            }
        }
    },
}
</script>

<style>
</style>
