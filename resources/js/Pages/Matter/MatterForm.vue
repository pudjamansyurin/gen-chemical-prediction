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
                persistent-hint
                outlined
            ></v-text-field>

            <v-checkbox
                v-model="form.required"
                :error-messages="form.error('name')"
                :success="!!form.error('name')"
                label="Required matter?"
                hint="This rule is used when composing formula"
                persistent-hint
                outlined
            >
            </v-checkbox>

            <v-btn v-show="false" type="submit"></v-btn>
        </v-form>
    </the-dialog-form>
</template>

<script>
import { cloneDeep, keys, pick, assign } from "lodash";

import { Matter } from "@/Config/models";
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
    },
    components: {
        TheDialogForm,
    },
    data() {
        return {
            model: "matter",
            fetching: false,
            form: this.$inertia.form(
                {
                    _method: "PUT",
                    ...cloneDeep(Matter)
                },
                {
                    bag: "matter_form",
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
                .get(route("matter.show", this.id).url())
                .then(({ data }) => {
                    assign(this.form, pick(data, keys(Matter)));
                })
                .catch((e) => (this.dialog = false))
                .then(() => (this.fetching = false));
        },
        reset() {
            delete this.$page.errorBags["matter_form"];
            assign(this.form, Matter);
        },
        method() {
            let method = "post";
            let url = route("matter.store");

            if (!this.creating) {
                method = "put";
                url = route("matter.update", this.id);
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
