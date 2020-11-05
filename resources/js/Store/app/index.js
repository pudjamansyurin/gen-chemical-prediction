import { cloneDeep } from "lodash";

import getters from "./getters";
// import actions from "./actions";
import mutations from "./mutations";
import { ls } from "@/Utils";
import { User } from "@/Config/models";
import { options } from "@/Config/table";

const state = {
    title: "CIWI Formula",
    drawer: null,
    loading: 0,
    fullscreen: false,
    dense: ls.get("dense") || false,
    dark: ls.get("dark") || false,
    profile: ls.get("profile") || cloneDeep(User),
    perPage: ls.get("perPage") || options.itemsPerPage,
    // remember: ls.get("remember") || false,
    size: {
        width: 0,
        height: 0
    },
    message: {
        text: "",
        type: "info"
    }
    // error: {
    //     code: null,
    //     text: ""
    // }
};

export default {
    namespaced: true,
    state,
    getters,
    // actions,
    mutations
};
