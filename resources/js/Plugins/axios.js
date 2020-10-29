// // import Vue from "vue";
// import axios from "axios";

// import store from "../store";
// import { APP_URL, APP_DEBUG } from "../config/app";
// import { ns, logger } from "../utils";
// import {
//     START_LOADING,
//     STOP_LOADING,
//     SET_MESSAGE,
//     CLEAR_ERROR,
//     CLEAR_MESSAGE
// } from "../store/app/mutation-types";

// // Create axios instance
// const instance = axios.create({
//     baseURL: `${APP_URL}/`,
//     // required to handle the CSRF token
//     withCredentials: true
// });

// // instance.defaults.headers.common["Authorization"] =  "Token" + localStorage.getItem("authToken");
// // instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// instance.defaults.headers.common["Content-Type"] = "application/json";
// instance.defaults.headers.common["Accept"] = "application/json";

// /*
//  * Add a request interceptor
//  @param config
// */
// instance.interceptors.request.use(
//     config => {
//         // get token, if user doesn't logout yet
//         // const { token } = store.state.app;
//         // config.headers.Authorization = token ? `Bearer ${token}` : null;

//         store.commit(ns("app", START_LOADING));
//         store.commit(ns("app", CLEAR_ERROR));
//         store.commit(ns("app", CLEAR_MESSAGE));
//         return config;
//     },
//     error => {
//         if (APP_DEBUG) {
//             logger(error, "warn");
//         }
//         store.commit(ns("app", STOP_LOADING));
//         return Promise.reject(error);
//     }
// );

// /*
//  * Add a response interceptor
//  */
// instance.interceptors.response.use(
//     response => {
//         const {
//             data: { message }
//         } = response;

//         if (APP_DEBUG) {
//             logger(response, "info");
//         }
//         store.commit(ns("app", STOP_LOADING));

//         // save api generated message
//         if (message) {
//             store.commit(ns("app", SET_MESSAGE), {
//                 text: message,
//                 type: "success"
//             });
//         }

//         return response;
//     },
//     ({ response: e }) => {
//         const { data } = e;
//         const { message } = data;

//         if (APP_DEBUG) {
//             logger(e, "error");
//         }
//         store.commit(ns("app", STOP_LOADING));

//         // save api generated message
//         if (message) {
//             store.commit(ns("app", SET_MESSAGE), {
//                 text: message,
//                 type: "error"
//             });
//         }

//         return Promise.reject(e);
//     }
// );

// // Vue.prototype.$http = instance;
// export default instance;
