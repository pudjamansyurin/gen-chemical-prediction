<template>
    <the-simple-table :headers="headers" :items="_form.measurements">
        <template v-slot:no="{ index }">
            {{ index + 1 }}
        </template>
        <template v-slot:name="{ item, index }">
            <v-autocomplete
                :value="item.id"
                @change="change(index, $event)"
                :items="list(item)"
                append-icon="mdi-close-circle-outline"
                @click:append="remove(index)"
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
            {{ getType(item) }}
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
                        @click="add()"
                        :disabled="_form.measurements.some((m) => m.id <= 0)"
                        color="primary"
                    >
                        mdi-plus-circle-outline
                    </v-icon>
                </td>
                <td :colspan="headers.length - 1"></td>
            </tr>
        </template>
    </the-simple-table>
</template>

<script>
import TheSimpleTable from "@/Components/TheSimpleTable";

export default {
    components: {
        TheSimpleTable
    },
    props: {
        form: {
            type: Object,
            default: () => {}
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
    },
    methods: {
        getType({primary}) {
            if (primary) return 'Primary';
            if (primary === 0) return 'Secondary';
            return;
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
