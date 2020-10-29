<template>
    <v-bottom-navigation :dark="dark" color="primary" app>
        <v-btn v-for="(item, index) in items" :key="index" :value="item.to">
            <span>{{ item.text }}</span>
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
import { CommonMixin, NavigationMixin } from "@/Mixins";

export default {
    mixins: [CommonMixin, NavigationMixin],
    computed: {
        items() {
            return this.navs
                .filter(({ bottomNav, children }) => !!bottomNav || !!children)
                .map((el) => {
                    if (el.children) {
                        return el.children.find(({ bottomNav }) => !!bottomNav);
                    }
                    return el;
                });
        },
    },
};
</script>

<style></style>
