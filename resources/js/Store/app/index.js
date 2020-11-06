import { cloneDeep } from "lodash";

import getters from "./getters";
// import actions from "./actions";
import mutations from "./mutations";
import { ls } from "@/Utils";
import { User } from "@/Config/models";
import { options } from "@/Config/table";

const state = {
    title: "CIWI Formula",
    loading: 0,
    fullscreen: false,
    drawer: null,
    dense: ls.get("dense") || false,
    dark: ls.get("dark") || false,
    // perPage: ls.get("perPage") || options.itemsPerPage,
    profile: /* ls.get("profile") || */ cloneDeep(User),
    message: {
        text: "",
        type: "info"
    },
    size: {
        width: 0,
        height: 0
    }
    // remember: ls.get("remember") || false,
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
