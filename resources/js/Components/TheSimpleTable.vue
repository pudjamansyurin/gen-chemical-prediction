<template>
    <v-simple-table dense>
        <template v-slot:default>
            <thead>
                <tr>
                    <th
                        v-for="header in headers"
                        :key="header.value"
                        :class="`text-${header.align}`"
                        :style="header.width && `width: ${header.width}px`"
                    >
                        {{ header.text }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="item.id">
                    <td
                        v-for="header in headers"
                        :key="header.value"
                        :class="`text-${header.align}`"
                    >
                        <slot
                            :name="header.value"
                            :item="item"
                            :index="index"
                        ></slot>
                    </td>
                </tr>
                <slot name="footer"></slot>
            </tbody>
        </template>
    </v-simple-table>
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
