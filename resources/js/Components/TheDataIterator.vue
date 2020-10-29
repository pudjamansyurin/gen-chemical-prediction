<template>
    <v-data-iterator :items="items" item-key="id" hide-default-footer>
        <template v-slot:default="{ items }">
            <v-card v-for="(item, index) in items" :key="item.id" class="mb-1">
                <v-card-title>
                    <h4>{{ item.name }}</h4>
                </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item v-for="header in headers" :key="header.value">
                        <v-list-item-content>
                            {{ header.text }} :
                        </v-list-item-content>
                        <v-list-item-content
                            class="align-end"
                            :class="{ 'justify-end': header.align == 'right' }"
                        >
                            <slot
                                :name="header.value"
                                :item="item"
                                :index="index"
                            ></slot>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-card class="mt-1">
                <v-card-title> </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                    <slot name="footer"></slot>
                </v-list>
            </v-card>
        </template>
    </v-data-iterator>
</template>

<script>
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
