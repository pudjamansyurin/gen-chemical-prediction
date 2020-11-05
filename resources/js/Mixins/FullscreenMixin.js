import { mapMutations, mapState } from "vuex";

import { TOGGLE_FULLSCREEN } from "@/Store/app/mutation-types";
import { ls } from "@/Utils";

export default {
    data() {
        return {
            dialogFullscreen: !ls.get("confirmedFullscreen")
        };
    },
    computed: {
        ...mapState("app", ["fullscreen"]),
        iconFullscreen() {
            return this.fullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen";
        }
    },
    methods: {
        ...mapMutations("app", [TOGGLE_FULLSCREEN]),
        toggleFullscreen() {
            this.$fullscreen.toggle(document.body, {
                callback: this.TOGGLE_FULLSCREEN()
            });
        },
        confirmFullscreen(state) {
            if (state) this.toggleFullscreen();

            ls.set("confirmedFullscreen", true);

            this.$nextTick(() => (this.dialogFullscreen = false));
        }
    }
};
