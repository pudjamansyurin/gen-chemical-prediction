<template>
    <v-data-iterator :items="items" item-key="id" hide-default-footer>
        <template v-slot="{ items }">
            <v-card v-for="(item, index) in items" :key="item.id" class="mb-1">
                <v-card-title class="align-center">
                    <slot name="header" :item="item" :index="index"></slot>
                </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item v-for="header in headers" :key="header.value">
                        <v-list-item-content>
                            {{ header.text }} :
                        </v-list-item-content>
                        <v-list-item-content
                            class="align-center justify-end"
                        >
                            <slot
                                :name="`item.${header.value}`"
                                :item="item"
                                :index="index"
                            ></slot>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-card class="mt-1">
                <v-list dense>
                    <slot name="footer"></slot>
                </v-list>
            </v-card>
        </template>
    </v-data-iterator>
</template>

<script>
import TheSimpleData from './TheSimpleData.vue';
export default {
    props: {
        headers: {
            type: Array,
            default: () => [],
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style>
</style>
