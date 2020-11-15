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

        <matter-list
            :selected.sync="selected"
            :options.sync="options"
            :total="total"
            :items="items"
            @edit="onEdit"
        >
        </matter-list>

        <matter-form v-model="dialogForm" :id="id"></matter-form>

        <matter-delete v-model="dialogDelete" :selected.sync="selected">
        </matter-delete>
    </fragment>
</template>

<script>
import PrivateLayout from "@/Layouts/PrivateLayout";
import { ModelIndexMixin } from "@/Mixins/Model";

import MatterList from "./MatterList";
import MatterForm from "./MatterForm";
import MatterDelete from "./MatterDelete";

export default {
    mixins: [ModelIndexMixin],
    layout: PrivateLayout,
    components: {
        MatterList,
        MatterForm,
        MatterDelete,
    },
    data() {
        return {
            model: "matter",
        };
    },
};
</script>

<style></style>
