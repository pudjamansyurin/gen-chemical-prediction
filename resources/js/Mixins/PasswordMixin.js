import { cloneDeep } from "lodash";

export default {
    data() {
        return {
            showPassword: false
        };
    },
    computed: {
        passwordState() {
            return {
                icon: this.showPassword ? "mdi-eye" : "mdi-eye-off",
                type: this.showPassword ? "text" : "password"
            };
        }
    }
};
