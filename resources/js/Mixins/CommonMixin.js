import { mapState, mapMutations } from "vuex";
import isWebview from "is-ua-webview";

import { START_LOADING, STOP_LOADING } from "@/Store/app/mutation-types";

export default {
    computed: {
        ...mapState("app", ["loading", "dark", "dense"]),
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        webview() {
            return isWebview(window.navigator.userAgent);
        }
    },
    methods: {
        ...mapMutations("app", [START_LOADING, STOP_LOADING])
    }
    // mounted() {
    //     this.$vuetify.goTo(0);
    // }
};
