import { menu } from "@/Config/navs";

export default {
    computed: {
        navs() {
            // let route = this.$route.name;
            // let navs = cloneDeep(menu);

            // group menu
            // navs.forEach((nav, index) => {
            //     if (nav.children) {
            //         nav.model = nav.children.some(({ to }) => to === route);
            //         // check pages role (at least 1 for group)
            //         if (nav.children) {
            //             let authNavs = nav.children.filter(({ to }) =>
            //                 this.authPage(to)
            //             );
            //             // force replace group as single nav
            //             if (authNavs.length == 1) {
            //                 navs[index] = authNavs[0];
            //             } else {
            //                 navs[index].children = authNavs;
            //             }
            //         }
            //     }
            // });

            // non group
            return menu.filter(m => this.authorized(m.to));
        }
    },
    methods: {
        goto(to) {
            this.$inertia.visit(route(to));
        },
        active(to) {
            return route().current(to);
        },
        logout() {
            this.$axios
                .post(route("logout").url())
                .then(response => {
                    window.location = "/";
                })
                .catch(e => {});
        },
        authorized(to) {
            let page = menu.find(m => m.to === to);
            let currentRole = this.$page.profile.role;

            if (!page) return false;
            if (!page.roles) return true;
            if (page.roles.includes(currentRole.name)) return true;
            return false;
        }
    }
};
