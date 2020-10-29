import Vue from "vue";
import Vuex from "vuex";
import { APP_DEBUG } from "@/Config/config";

import app from "./app";

Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced: true,
    modules: {
        app
    },
    strict: APP_DEBUG
});
