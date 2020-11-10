import { menu } from "@/Config/navs";

export default {
    computed: {
        navs() {
            //     let route = this.$route.name;
            //     let navs = cloneDeep(menu);

            //     // group menu
            //     navs.forEach((nav, index) => {
            //         if (nav.children) {
            //             nav.model = nav.children.some(({ to }) => to === route);

            //             // check pages role (at least 1 for group)
            //             if (nav.children) {
            //                 let authNavs = nav.children.filter(({ to }) =>
            //                     this.authPage(to)
            //                 );

            //                 // force replace group as single nav
            //                 if (authNavs.length == 1) {
            //                     navs[index] = authNavs[0];
            //                 } else {
            //                     navs[index].children = authNavs;
            //                 }
            //             }
            //         }
            //     });

            //     // non group
            //     return navs.filter(({ to }) => {
            //         if (to) {
            //             return this.authPage(to);
            //         }
            //         return true;
            //     });
            return menu;
        }
    },
    methods: {
        goto(to) {
            this.$inertia.visit(route(to));
        },
        active(to) {
            return route().current(to);
        },
        gotoProfile() {
            this.goto("profile.show");
        },
        activeProfile() {
            return this.active("profile.show");
        },
        logout() {
            this.$axios
                .post(route("logout").url())
                .then(response => {
                    window.location = "/";
                })
                .catch(e => {});
        }

        // authPage(name) {
        //     let page = this.$router.resolve({ name });
        //     let role = get(this.profile, "role.name");
        //     // valid page
        //     if (page) {
        //         // check authorization
        //         let roles = page.route.meta.roles;
        //         if (roles) {
        //             if (roles.includes(role)) {
        //                 // user role is authorized
        //                 return true;
        //             } else {
        //                 // user role is un-authorized
        //                 return false;
        //             }
        //         }
        //         // un-authorized page
        //         return true;
        //     }
        //     // invalid page
        //     return false;
        // }
    }
};
