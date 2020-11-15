<template>
    <fragment>
        <app-top-bar
            :selected.sync="selected"
            :options.sync="options"
            :page-title="model.name.toUpperCase()"
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
            mine-tab
        >
        </measurement-list>

        <measurement-form
            v-model="dialogForm"
            :model="model"
            :id="id"
        ></measurement-form>

        <measurement-delete
            v-model="dialogDelete"
            :model="model"
            :selected.sync="selected"
        >
        </measurement-delete>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";

import { ModelIndexMixin } from "@/Mixins/Model";
import { Measurement as model} from "@/Config/models";

import MeasurementList from "./MeasurementList";
import MeasurementForm from "./MeasurementForm";
import MeasurementDelete from "./MeasurementDelete";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        MeasurementList,
        MeasurementForm,
        MeasurementDelete,
    },
    props: ["items", "total"],
    data() {
        return {
            model,
        };
    },
};
</script>

<style></style>
