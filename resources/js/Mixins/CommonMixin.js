import { mapState, mapMutations, mapGetters } from "vuex";
import isWebview from "is-ua-webview";

import { START_LOADING, STOP_LOADING } from "@/Store/app/mutation-types";

export default {
    computed: {
        ...mapState("app", ["profile", "dark", "dense"]),
        ...mapGetters("app", ["isLoading"]),
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
