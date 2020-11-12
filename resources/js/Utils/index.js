import store from "@/Store";
// import router from "../router";
// import { CLEAR_PROFILE, SET_ERROR } from "../store/app/mutation-types";
// import {
//     HTTP_UNPROCESSABLE_ENTITY,
//     HTTP_UNAUTHORIZED
// } from "../config/responses";

export const ns = (namespace, definition) =>
    `${namespace.toLowerCase()}/${definition}`;

export const ls = {
    set: (item, value) =>
        window.localStorage.setItem(item, JSON.stringify(value)),
    get: item => JSON.parse(window.localStorage.getItem(item)),
    remove: item => window.localStorage.removeItem(item)
};

export const logger = (message, type = "log") => {
    console[type](message);
};

export const bool = val => {
    if (Number.isInteger(val)) return !(val === 0);
    return val === "true";
};

// export const eHandler = e => {
//     const { status: code, statusText: text, data } = e;
//     const { errors, message } = data;
//     const { profile } = store.state.app;
//     // save system generated message
//     store.commit(ns("app", SET_ERROR), {
//         code,
//         text
//     });
//     // handle each error codes
//     let error = [];
//     switch (code) {
//         case HTTP_UNAUTHORIZED:
//             if (profile.id > -1) {
//                 // remove session
//                 store.commit(ns("app", CLEAR_PROFILE));
//                 // session expired
//                 router.push({
//                     name: "login",
//                     query: {
//                         redirect: router.currentRoute.fullPath
//                     }
//                 });
//             }
//             break;
//         case HTTP_UNPROCESSABLE_ENTITY:
//             error = errors || [];
//             break;
//         default:
//             router.push({ name: "error" });
//             break;
//     }
//     return error;
// };
