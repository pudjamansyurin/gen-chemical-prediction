<template>
    <the-simple-data :headers="headers" :form="_form" field="measurements" :disable-add="disableAdd" :disabled="disabled" :readonly="readonly" @add="add" @remove="remove">
        <template v-slot:[`item.name`]="{ item, index }">
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
            >
              <template v-slot:item="{item}">
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ getType(item) }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
              </template>
            </v-autocomplete>
        </template>
        <template v-slot:[`item.type`]="{ item, index }">
            {{ getType(item) || '-' }}
        </template>
        <template v-slot:[`item.value`]="{ item, index }">
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
        measurements: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            field: 'measurements',
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
        formField() {
            return this._form[this.field];
        },
        disableAdd() {
            let hasUnFilled = this.formField.some((m) => m.id <= 0);
            let maxListReached = this.formField.length == this[this.field].length;

            return this.disabled || hasUnFilled || maxListReached;
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
                primary: el.primary
            })
        },
        add() {
            this._form[this.field].push({
                id: -1,
                value: null,
                primary : null,
            })
        },
        getType({primary}) {
            if (primary) return 'Primary';
            if (primary === 0) return 'Non-Primary';
        },
    },
    watch: {
        '_form.measurements.length' : {
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
