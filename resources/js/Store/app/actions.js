// import { auth as api } from "../../api";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.LOGIN]({ commit }, payload) {
        // return api.login(payload).then(({ data }) => {
        //     const { user } = data;
        //     commit(mutations.SET_PROFILE, user);
        //     commit(mutations.SET_REMEMBER, payload);
        // });
    },
    [actions.LOGOUT]({ commit }) {
        // return api.logout().then(() => commit(mutations.CLEAR_PROFILE));
    },
    [actions.FORGET]({ commit }, payload) {
        // return api.forget(payload).then(() =>
        //     commit(mutations.SET_MESSAGE, {
        //         text: "Check your email",
        //         type: "success"
        //     })
        // );
    },
    [actions.RESET]({ commit }, payload) {
        // return api
        //     .reset(payload)
        //     .then(({ data }) => commit(mutations.SET_PROFILE, data.user));
    },
    [actions.RESEND]({ commit }) {
        // return api.resend().then(() =>
        //     commit(mutations.SET_MESSAGE, {
        //         text: "Check your email",
        //         type: "success"
        //     })
        // );
    },
    [actions.VERIFY]({ commit }, url) {
        // return api.verify(url);
    },
    [actions.GET_PROFILE]({ commit }) {
        // return api.getProfile().then(data => {
        //     commit(mutations.SET_PROFILE, data);
        // });
    },
    [actions.UPDATE_PROFILE]({ commit }, { payload }) {
        // return api.updateProfile(payload).then(data => {
        //     commit(mutations.SET_PROFILE, data);
        //     commit(mutations.SET_MESSAGE, {
        //         text: "Profile udpated successfully",
        //         type: "success"
        //     });
        //     return data;
        // });
    }
};
