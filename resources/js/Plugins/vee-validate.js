import Vue from "vue";
import * as rules from "vee-validate/dist/rules";
import { extend } from "vee-validate";
import { messages } from "vee-validate/dist/locale/en.json";
import { ValidationProvider, ValidationObserver } from "vee-validate";

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule] // assign message
    });
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
