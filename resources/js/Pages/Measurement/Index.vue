<template>
    <fragment>
        <app-top-bar
            :selected.sync="selected"
            :options.sync="options"
            :page-title="model.toUpperCase()"
            @create="onCreate"
            @delete="onDelete"
            mine-tab
        >
        </app-top-bar>

        <measurement-list
            :selected.sync="selected"
            :options.sync="options"
            :total="total"
            :items="items"
            @edit="onEdit"
        >
        </measurement-list>

        <measurement-form v-model="dialogForm" :id="id"></measurement-form>

        <measurement-delete v-model="dialogDelete" :selected.sync="selected">
        </measurement-delete>
    </fragment>
</template>

<script>
import ModelIndex from "@/Mixins/Model/ModelIndex";

import MeasurementList from "./MeasurementList";
import MeasurementForm from "./MeasurementForm";
import MeasurementDelete from "./MeasurementDelete";

export default {
    mixins: [ModelIndex],
    components: {
        MeasurementList,
        MeasurementForm,
        MeasurementDelete,
    },
    props: ["items", "total"],
    data() {
        return {
            model: "measurement",
        };
    },
};
</script>

<style></style>
