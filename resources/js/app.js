// require("./bootstrap");
import Vue from "vue";

import { InertiaApp } from "@inertiajs/inertia-vue";
import { InertiaForm } from "laravel-jetstream";
// import PortalVue from "portal-vue";

import store from "@/Store";
import vuetify from "@/Plugins";
import CommonMixin from "@/Mixins/CommonMixin";
import { APP_DEBUG } from "@/Config/config";

Vue.use(InertiaApp);
Vue.use(InertiaForm);
// Vue.use(PortalVue);

Vue.mixin({ methods: { route } });
Vue.mixin(CommonMixin);

Vue.config.productionTip = APP_DEBUG;
const app = document.getElementById("app");

new Vue({
    store,
    vuetify,
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                // resolveComponent: name => require(`./Pages/${name}`).default
                resolveComponent: name =>
                    import(`./Pages/${name}`).then(module => module.default)
            }
        })
}).$mount(app);
