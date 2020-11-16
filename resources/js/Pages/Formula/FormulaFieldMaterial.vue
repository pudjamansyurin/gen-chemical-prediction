<template>
    <fragment>
        <v-card v-for="matter in matters" :key="`matter.${matter.id}`" outlined>
            <v-card-subtitle>
                {{ matter.name }}
                <v-icon
                    @click="add(matter.id)"
                    :disabled="
                        form.materials
                            .filter((m) => m.matter_id == matter.id)
                            .some((m) => m.id <= 0) ||
                        form.materials.filter((m) => m.matter_id == matter.id)
                            .length >=
                            materials.filter((m) => m.matter_id == matter.id)
                                .length
                    "
                    color="primary"
                    >mdi-plus-circle-outline</v-icon
                >
            </v-card-subtitle>
            <v-card-text>
                <v-row
                    v-for="(material, idx) in form.materials.filter(
                        (m) => m.matter_id == matter.id
                    )"
                    :key="`matter.${matter.id}.material.${idx}`"
                    dense
                >
                    <v-col cols="8">
                        <v-autocomplete
                            v-model="material.id"
                            :items="list(matter, material)"
                            item-text="name"
                            item-value="id"
                            label="Materials"
                            hint="Materials used for this formula"
                            prepend-icon="mdi-close-circle-outline"
                            @click:prepend="remove(index(matter, material))"
                            outlined
                            attach
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field
                            v-model="material.value"
                            :error-messages="
                                form.error(
                                    `materials.${index(matter, material)}.value`
                                )
                            "
                            :success="
                                !!form.error(
                                    `materials.${index(matter, material)}.value`
                                )
                            "
                            label="Value"
                            type="number"
                            hint="Percentage value for this material"
                            prefix="%"
                            reverse
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </fragment>
</template>

<script>
export default {
    props: [ '_form', 'matters', 'materials'],
    computed: {
        form: {
            get() {
                return this._form;
            },
            set(value) {
                this.$emit("update:_form", value);
            },
        },
    },
    methods: {
        list({id: matterId}, {id: materialId}) {
            return this.materials
                .filter((m) => m.matter_id == matterId)
                .filter(
                    (m) =>
                        !this.form.materials.some(
                            ({ id }) =>
                                id != materialId &&
                                id == m.id
                        )
                )
        },
        index({id: matterId}, {id: materialId}) {
            return this.form.materials.findIndex(
                (m) =>  m.matter_id == matterId && m.id === materialId
            );
        },
        add(matterId) {
            this.form.materials.push({
                id: -1,
                name: "",
                value: null,
                matter_id : matterId,
            })
        },
        remove(idx) {
            this.form.materials.splice(idx, 1);
        },
    },
}
</script>

<style>
</style>
