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
                label="Material name"
                type="text"
                hint="This should be unique name"
                persistent-hint
                outlined
            ></v-text-field>

            <v-autocomplete
                v-model="form.matter_id"
                :items="matters"
                :error-messages="form.error('matter_id')"
                :success="!!form.error('matter_id')"
                item-text="name"
                item-value="id"
                label="Matter"
                hint="Category for this material"
                chips
                persistent-hint
                outlined
            ></v-autocomplete>

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
import { cloneDeep, keys, pick, assign } from "lodash";

import { Material } from "@/Config/models";
import { CommonMixin } from "@/Mixins";

import TheDialogForm from "@/Components/TheDialogForm";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
            default: -1,
        },
        matters: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        TheDialogForm,
    },
    data() {
        return {
            model: "material",
            fetching: false,
            form: this.$inertia.form(
                {
                    _method: "PUT",
                    ...cloneDeep(Material)
                },
                {
                    bag: "material_form",
                    resetOnSuccess: false,
                }
            ),
        };
    },
    computed: {
        creating() {
            return this.id === -1;
        },
        disabled() {
            return this.form.processing || this.fetching;
        },
        readonly() {
            return !(this.creating || this.form.authorized);
        },
        formTitle() {
            if (this.readonly) return;

            let action = this.creating ? "New" : "Edit";
            let title = this.model.toUpperCase();
            return `${action} ${title}`;
        },
        dialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
        fetch() {
            this.fetching = true;
            this.$axios
                .get(route("material.show", this.id).url())
                .then(({ data }) => {
                    assign(this.form, pick(data, keys(Material)));
                })
                .catch((e) => (this.dialog = false))
                .then(() => (this.fetching = false));
        },
        reset() {
            delete this.$page.errorBags["material_form"];
            assign(this.form, Material);
        },
        method() {
            let method = "post";
            let url = route("material.store");

            if (!this.creating) {
                method = "put";
                url = route("material.update", this.id);
            }

            return { url, method };
        },
        save() {
            let { url, method } = this.method();

            this.form._method = method;
            this.form.post(url, {
                preserveScroll: true,
                onSuccess: (page) => {
                    if (!this.form.hasErrors()) this.dialog = false;
                },
            });
        },
    },
    watch: {
        value: {
            immediate: true,
            handler(open) {
                if (open) {
                    if (!this.creating) this.fetch();
                    this.form.change_password = this.creating;
                } else {
                    this.reset();
                }
            },
        },
    },
};
</script>

<style></style>
