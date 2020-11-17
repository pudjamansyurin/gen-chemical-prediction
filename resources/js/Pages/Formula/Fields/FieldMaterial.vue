<template>
    <the-simple-table :headers="headers" :items="_form.materials">
        <template v-slot:no="{ index }">
            {{ index + 1 }}
        </template>
        <template v-slot:name="{ item, index }">
            <v-autocomplete
                :value="item.id"
                @change="change(index, $event)"
                :items="list(item)"
                :error-messages="_form.error(`materials.${index}.id`)"
                :success="!!_form.error(`materials.${index}.id`)"
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
            <v-text-field
                :value="getMatter(item).name || '-'"
                hide-details="auto"
                readonly
                solo
                flat
                dense
            ></v-text-field>
        </template>
        <template v-slot:value="{ item, index }">
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

        <template v-slot:footer>
            <tr class="font-weight-bold">
                <td>
                    <v-icon
                        @click="add()"
                        :disabled="disableAdd"
                        color="primary"
                    >
                        mdi-plus-circle-outline
                    </v-icon>
                </td>
                <td>
                    <span v-if="!!_form.error(`materials`)" class="red--text">
                        {{ _form.error(`materials`) }}
                    </span>
                </td>
                <td class="text-right" :colspan="headers.length - 3">TOTAL</td>
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
        matters: {
            type: Array,
            default: () => [],
        },
        materials: {
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
        portionTotal() {
            return this.form.materials.reduce(
                (carry, { value }) => carry + Number(value),
                0
            );
        },
        disableAdd() {
            let hasUnFilled = this._form.materials.some((m) => m.id <= 0);
            let maxListReached = this._form.materials.length == this.materials.length;

            return hasUnFilled || maxListReached;
        }
    },
    methods: {
        getMatter({matter_id}) {
            return this.matters.find(m => m.id === matter_id) || '';
        },
        list({id: materialId}) {
            let ids = this._form.materials
                            .filter(m => m.id != materialId)
                            .map(m => m.id)

            return this.materials.filter((m) => !ids.includes(m.id))
        },
        change(idx, {id, matter_id}) {
            this._form.materials.splice(idx, 1, {
                ...this._form.materials[idx],
                id,
                matter_id
            })
        },
        remove(idx) {
            this._form.materials.splice(idx, 1);
        },
        add() {
            this._form.materials.push({
                id: -1,
                value: null,
                matter_id : -1,
            })
        }
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
