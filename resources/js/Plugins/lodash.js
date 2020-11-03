import Vue from "vue";
import { debounce, isEqual, get, startCase } from "lodash";

Vue.prototype.$lodash = {
    debounce,
    isEqual,
    get,
    startCase
};
