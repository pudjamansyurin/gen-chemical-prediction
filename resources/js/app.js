// require("./bootstrap");

import Vue from "vue";

import { InertiaApp } from "@inertiajs/inertia-vue";
import { InertiaForm } from "laravel-jetstream";
// import PortalVue from "portal-vue";

import store from "@/Store";
import vuetify from "@/Plugins";
import { APP_DEBUG } from "@/Config/config";

Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
// Vue.use(PortalVue);

Vue.config.productionTip = APP_DEBUG;
const app = document.getElementById("app");

new Vue({
    store,
    vuetify,
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => require(`./Pages/${name}`).default
            }
        })
}).$mount(app);
