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
                label="Matter name"
                type="text"
                hint="This should be unique name"
                outlined
            ></v-text-field>

            <v-checkbox
                v-model="form.required"
                :error-messages="form.error('required')"
                :success="!!form.error('required')"
                label="Required matter?"
                hint="This rule is used when composing formula"
                outlined
            >
            </v-checkbox>

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
    mixins: [CommonMixin, ModelFormMixin]
};
</script>

<style></style>
