import { mapState } from "vuex";
import isWebview from "is-ua-webview";

export default {
    computed: {
        ...mapState("app", ["darker", "denser"]),
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        webview() {
            return isWebview(navigator.userAgent);
        }
    }
};
