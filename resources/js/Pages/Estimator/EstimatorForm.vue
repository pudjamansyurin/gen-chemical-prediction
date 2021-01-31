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
        label="Estimator name"
        type="text"
        hint="This should be unique name"
        persistent-hint
        outlined
      ></v-text-field>

      <v-textarea
        v-model="form.desc"
        :error-messages="form.error('desc')"
        :success="!!form.error('desc')"
        :dense="denser"
        label="Estimator desc"
        type="text"
        hint="Just for documentation"
        row-height="2"
        persistent-hint
        outlined
        auto-grow
        clearable
      >
      </v-textarea>

      <v-checkbox
        v-model="form.steps"
        :error-messages="form.error('steps')"
        :success="!!form.error('steps')"
        :dense="denser"
        label="Steps features"
        hint="This depends on estimator feature"
        persistent-hint
        outlined
      >
      </v-checkbox>

      <v-checkbox
        v-model="form.ranked"
        :error-messages="form.error('ranked')"
        :success="!!form.error('ranked')"
        :dense="denser"
        label="Ranked features"
        hint="This depends on estimator feature"
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
