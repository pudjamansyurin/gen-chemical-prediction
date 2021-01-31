<template>
    <v-bottom-navigation :dark="darker" color="primary" app>
        <v-btn
            v-for="(item, index) in items"
            :key="index"
            @click="goto(item.to)"
            :input-value="active(item.to)"
        >
            <span>{{ item.text }}</span>
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>
 
<script>
import { NavigationMixin } from "@/Mixins";

export default {
    mixins: [NavigationMixin],
    computed: { 
        items() {
            return this.navs
                .filter(({ bottomNav, children }) => !!bottomNav || !!children)
                .map(el => {
                    if (el.children) {
                        return el.children.find(({ bottomNav }) => !!bottomNav);
                    }
                    return el;
                });
        }
    }
};
</script>

<style></style>
