<template>
    <the-simple-data :headers="headers" :form="_form" field="materials" :disable-add="disableAdd" :disabled="disabled" :readonly="readonly" @add="add" @remove="remove">
        <template v-slot:[`item.name`]="{ item, index }">
            <v-autocomplete
                :value="item.id"
                @change="change(index, $event)"
                :items="list(item)"
                :error-messages="_form.error(`materials.${index}.id`)"
                :success="!!_form.error(`materials.${index}.id`)"
                item-text="name"
                item-value="id"
                hide-details="auto"
                flat
                outlined
                dense
                return-object
            >
              <template v-slot:item="{item}">
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ getMatter(item).name }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
              </template>
            </v-autocomplete>
        </template>
        <template v-slot:[`item.type`]="{ item, index }">
            {{ getMatter(item).name || '-' }}
        </template>
        <template v-slot:[`item.value`]="{ item, index }">
            <v-text-field
                v-model.number="item.value"
                :error-messages="_form.error(`materials.${index}.value`)"
                :success="!!_form.error(`materials.${index}.value`)"
                type="number"
                prefix="%"
                hide-details="auto"
                reverse
                flat
                outlined
                dense
            ></v-text-field>
        </template>

        <template v-slot:footer-table>
            <tr class="font-weight-bold">
                <td class="text-right" :colspan="headers.length - 1">TOTAL</td>
                <td class="text-right">
                    <v-text-field
                        :value="portionTotal"
                        :error-messages="_form.error(`materials.value`)"
                        :success="!!_form.error(`materials.value`)"
                        type="text"
                        prefix="%"
                        hide-details="auto"
                        readonly
                        reverse
                        flat
                        solo
                        dense
                    ></v-text-field>
                </td>
            </tr>
        </template>

        <template v-slot:footer-iterator>
            <v-list-item class="font-weight-bold">
                <v-list-item-content>Total</v-list-item-content>
                <v-list-item-content class="align-end justify-end">
                    <v-text-field
                        :value="portionTotal"
                        :error-messages="_form.error(`materials.value`)"
                        :success="!!_form.error(`materials.value`)"
                        type="text"
                        prefix="%"
                        hide-details="auto"
                        readonly
                        reverse
                        flat
                        solo
                        dense
                    ></v-text-field>
                </v-list-item-content>
            </v-list-item>
        </template>
    </the-simple-data>
</template>

<script>
import { CommonMixin } from "@/Mixins";

import TheSimpleData from "@/Components/TheSimpleData";

export default {
    mixins: [CommonMixin],
    components: {
        TheSimpleData
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
        materials: {
            type: Array,
            default: () => [],
        },
        matters: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            field: 'materials',
            headers: [
                {
                    text: "No",
                    value: "no",
                    align: "center",
                    width: 8,
                },
                {
                    text: "Material",
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
                    text: "Portion",
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
        formField() {
            return this._form[this.field];
        },
        disableAdd() {
            let hasUnFilled = this.formField.some((m) => m.id <= 0);
            let maxListReached = this.formField.length == this[this.field].length;

            return this.disabled || hasUnFilled || maxListReached;
        },
        portionTotal() {
            return this.formField.reduce(
                (carry, { value }) => carry + Number(value),
                0
            );
        },
    },
    methods: {
        list({id}) {
            let ids = this._form[this.field]
                            .filter(m => m.id != id)
                            .map(m => m.id)

            return this[this.field]
                        .filter((m) => !ids.includes(m.id))
        },
        remove(idx) {
            this._form[this.field].splice(idx, 1);
        },
        change(idx, el) {
            this._form[this.field].splice(idx, 1, {
                ...this._form[this.field][idx],
                id: el.id,
                matter_id: el.matter_id
            })
        },
        add() {
            this._form[this.field].push({
                id: -1,
                value: null,
                matter_id : -1,
            })
        },
        getMatter({matter_id}) {
            return this.matters.find(m => m.id === matter_id) || '';
        },
    },
    watch: {
        '_form.materials.length' : {
            immediate: true,
            handler(v) {
                if(v == 0) this.add()
            }
        }
    },
}
</script>

<style>
</style>
