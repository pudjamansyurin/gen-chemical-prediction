import { mapState } from "vuex";
import isWebview from "is-ua-webview";

export default {
    computed: {
        ...mapState("app", ["dark", "dense"]),
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        webview() {
            return isWebview(window.navigator.userAgent);
        }
    }
};
