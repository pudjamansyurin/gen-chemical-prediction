import { ls } from "@/Utils";
// import { User } from "../../models";
import { cloneDeep } from "lodash";
import * as mutations from "./mutation-types";

export default {
    [mutations.START_LOADING](state) {
        state.loading += 1;
    },
    [mutations.STOP_LOADING](state) {
        state.loading -= 1;
    },

    [mutations.TOGGLE_FULLSCREEN](state) {
        state.fullscreen = !state.fullscreen;
    },
    [mutations.TOGGLE_DENSER](state) {
        state.denser = !state.denser;
        ls.set("denser", state.denser);
    },
    [mutations.TOGGLE_DARKER](state) {
        state.darker = !state.darker;
        ls.set("darker", state.darker);
    },
    [mutations.TOGGLE_DRAWER](state) {
        state.drawer = !state.drawer;
    },

    [mutations.SET_DRAWER](state, open) {
        state.drawer = open;
    },
    [mutations.SET_SIZE](state, { width, height }) {
        state.size = { width, height };
    },
    [mutations.SET_MESSAGE](state, { text, type }) {
        state.message = { text, type };
    }
    // [mutations.SET_PROFILE](state, data) {
    //     state.profile = data;
    //     // ls.set("profile", data);
    // },
    // [mutations.CLEAR_PROFILE](state) {
    //     state.profile = cloneDeep(User);
    //     // ls.remove("profile");
    // },
    // [mutations.SET_PER_PAGE](state, count) {
    //     state.perPage = count;
    //     ls.set("perPage", count);
    // },
    // [mutations.CLEAR_MESSAGE](state) {
    //     state.message = {
    //         text: "",
    //         type: "info"
    //     };
    // }
    // [mutations.SET_ERROR](state, { code, text }) {
    //     state.error = {
    //         code,
    //         text
    //     };
    // },
    // [mutations.CLEAR_ERROR](state) {
    //     state.error = {
    //         code: null,
    //         text: ""
    //     };
    // },
    // [mutations.SET_REMEMBER](state, { email, password, remember }) {
    //     state.remember = remember;
    //     ls.set("remember", remember);
    //     if (remember) {
    //         ls.set("credential", {
    //             email,
    //             password
    //         });
    //     } else {
    //         ls.remove("credential");
    //     }
    // },
};
