import { menu } from "@/Config/navs";

export default {
    computed: {
        navs() {
            return menu.reduce((arr, el) => {
                if (el.children) {
                    let newNavGroup = this.convertNavGroup(el);
                    if (newNavGroup) return arr.concat(newNavGroup);
                } else if (el.to) {
                    if (this.authorized(el)) return arr.concat(el);
                } else {
                    return arr.concat(el);
                }

                return arr;
            }, []);
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
                .then(response => (window.location = "/"))
                .catch(e => {});
        },
        convertNavGroup(nav) {
            nav.model = nav.children.some(({ to }) => to === route().current());

            let authNavs = nav.children.filter(el => this.authorized(el));

            if (authNavs.length > 1) {
                return {
                    ...nav,
                    children: authNavs
                };
            } else if (authNavs.length == 1) {
                return authNavs[0];
            }
            return;
        },
        authorized(nav) {
            if (!nav.to) return false;
            if (nav.roles.includes("*")) return true;
            if (nav.roles.includes(this.$page.profile.role.name)) return true;
            return false;
        }
    }
};
