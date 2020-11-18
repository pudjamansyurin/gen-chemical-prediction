// import { cloneDeep } from "lodash";

import getters from "./getters";
// import actions from "./actions";
import mutations from "./mutations";
import { ls } from "@/Utils";
// import { User } from "@/Config/models";
// import { options } from "@/Config/table";

const state = {
    title: "CIWI Formula",
    loading: 0,
    fullscreen: false,
    drawer: null,
    denser: ls.get("denser") || false,
    darker: ls.get("darker") || false,
    message: {
        text: "",
        type: "info"
    },
    size: {
        width: 0,
        height: 0
    },
    // perPage: ls.get("perPage") || options.itemsPerPage,
    // profile: cloneDeep(User),
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
