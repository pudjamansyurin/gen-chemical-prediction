import TheSimpleData from "@/Components/TheSimpleData";

export default {
    components: {
        TheSimpleData
    },
    props: {
        form: {
            type: Object,
            default: () => {}
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        _form: {
            get() {
                return this.form;
            },
            set(value) {
                this.$emit("update:form", value);
            },
        },
        disableAdd() {
            let hasUnFilled = this._form[this.field].some((m) => m.id <= 0);
            let maxListReached = this._form[this.field].length == this[this.field].length;

            return this.disabled || hasUnFilled || maxListReached;
        },
    },
    methods: {
        list({id}) {
            let ids = this._form[this.field]
                            .filter(m => m.id != id)
                            .map(m => m.id)

            return this[this.field]
                        .filter((m) => !ids.includes(m.id))
        },
        remove(idx) {
            this._form[this.field].splice(idx, 1);
        },
    }
}
