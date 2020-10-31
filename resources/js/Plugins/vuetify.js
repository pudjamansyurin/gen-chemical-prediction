import Vue from "vue";
import Vuetify from "vuetify";
// import 'vuetify/dist/vuetify.min.css'
// import Vuetify, { VCard, VRating, VToolbar } from "vuetify/lib";

Vue.use(Vuetify, {
    // components: {
    //     VCard,
    //     VRating,
    //     VToolbar
    // }
});

export default new Vuetify({
    icons: {
        iconfont: "mdi"
    }
});
