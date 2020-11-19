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
                            {{ getMatterName(item) }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
              </template>
            </v-autocomplete>
        </template>
        <template v-slot:[`item.type`]="{ item }">
            {{ getMatterName(item) || '-' }}
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
import {ModelFieldMixin} from "@/Mixins/Model";

export default {
    mixins: [ModelFieldMixin],
    props: {
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
        portionTotal() {
            return this._form[this.field].reduce(
                (carry, { value }) => carry + Number(value),
                0
            );
        },
    },
    methods: {
        add() {
            this._form[this.field].push({
                id: -1,
                value: null,
                name: "",
                matter_id: -1
            })
        },
        change(idx, el) {
            this._form[this.field].splice(idx, 1, {
                ...this._form[this.field][idx],
                id: el.id,
                name: el.name,
                matter_id: el.matter_id
            })
        },
        getMatterName(el) {
            let matter = this.matters.find(m => m.id === el.matter_id);
            if (matter) return matter.name;
        },
    },
    watch: {
        '_form.materials.length' : {
            immediate: true,
            handler(v) {
                if (v == 0) this.add()
            }
        }
    },
}
</script>

<style>
</style>
