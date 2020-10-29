import { cloneDeep } from "lodash";

export default {
    data() {
        return {
            showPassword: false
            // changePassword: false
        };
    },
    computed: {
        passwordState() {
            return {
                icon: this.showPassword ? "mdi-eye" : "mdi-eye-off",
                type: this.showPassword ? "text" : "password"
            };
        },
        passwordChangeText() {
            return this.changePassword ? "Keep" : "Change";
        }
    },
    methods: {
        copyWithPassword(item) {
            return cloneDeep({
                ...item,
                password: null,
                password_confirmation: null
            });
        },
        removeUnchangedPassword() {
            if (!this.changePassword) {
                this.$delete(this.form, "password");
                this.$delete(this.form, "password_confirmation");
            }
        }
    }
};
