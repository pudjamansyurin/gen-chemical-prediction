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
                :dense="denser"
                label="Matter name"
                type="text"
                hint="This should be unique name"
                persistent-hint
                outlined
            ></v-text-field>

            <v-checkbox
                v-model="form.required"
                :error-messages="form.error('required')"
                :success="!!form.error('required')"
                :dense="denser"
                label="Required matter?"
                hint="This rule is used when composing formula"
                persistent-hint
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
import { ModelFormMixin } from "@/Mixins/Model";

export default {
    mixins: [ModelFormMixin]
};
</script>

<style></style>
