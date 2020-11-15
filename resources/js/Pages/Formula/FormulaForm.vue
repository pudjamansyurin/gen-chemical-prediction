<template>
    <the-dialog-form
        v-model="dialog"
        :title="formTitle"
        :disabled="disabled"
        :readonly="readonly"
        @submit="save"
    >
        <v-form @submit.prevent="save" :disabled="disabled || readonly">
            <v-text-field
                v-model="form.name"
                :error-messages="form.error('name')"
                :success="!!form.error('name')"
                :autofocus="!mobile"
                label="Formula name"
                type="text"
                hint="This should be unique name"
                persistent-hint
                outlined
            ></v-text-field>

            <v-textarea
                v-model="form.note"
                :error-messages="form.error('note')"
                :success="!!form.error('note')"
                label="Formula note"
                type="text"
                hint="Just for documentation"
                persistent-hint
                outlined
                auto-grow
                clearable
            >
            </v-textarea>

            <!-- <v-autocomplete
                v-model="form.material_id"
                :items="materials"
                :error-messages="form.error('material_id')"
                :success="!!form.error('material_id')"
                item-text="name"
                item-value="id"
                label="Matter"
                hint="Category for this formula"
                chips
                persistent-hint
                outlined
            ></v-autocomplete> -->

            <v-btn
                v-if="!readonly"
                :disabled="disabled"
                class="d-none"
                type="submit"
            ></v-btn>
        </v-form>
    </the-dialog-form>
</template>

<script>
import { CommonMixin } from "@/Mixins";
import { ModelFormMixin } from "@/Mixins/Model";

export default {
    mixins: [CommonMixin, ModelFormMixin],
    props: {
        materials: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style></style>
