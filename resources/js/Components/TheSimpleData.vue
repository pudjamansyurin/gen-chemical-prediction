<template>
    <the-simple-table v-if="!mobile" :headers="headers" :items="form[field]">
        <template
            v-for="header in headers"
            v-slot:[`item.${header.value}`]="{ item, index }"
        >
            <slot :name="`item.${header.value}`" :item="item" :index="index">
                <template v-if="header.value == 'no'">
                    <v-hover v-slot="{ hover }" :disabled="mobile || readonly">
                        <span v-if="!hover">{{ index + 1 }}</span>
                        <v-icon v-else @click="$emit('remove', index)" :disabled="disabled" color="red">
                            mdi-close-circle-outline
                        </v-icon>
                    </v-hover>
                </template>
            </slot>
        </template>

        <template v-slot:footer>
            <tr>
                <td>
                    <v-icon
                        v-if="!readonly"
                        @click="$emit('add')"
                        :disabled="disableAdd"
                        color="primary"
                    >
                        mdi-plus-circle-outline
                    </v-icon>
                </td>
                <td :colspan="headers.length - 1">
                    <span v-if="!!form.error(field)" class="red--text">
                        {{ form.error(field) }}
                    </span>
                </td>
            </tr>
            <slot name="footer-table"></slot>
        </template>
    </the-simple-table>

    <the-simple-iterator
        v-else
        :headers="headers"
        :items="form[field]"
    >
        <template v-slot:header="{ item, index }">
            <slot name="header-iterator" :item="item" :index="index">
                <span class="text-subtitle-1">{{ item.name }}</span>
                <v-spacer></v-spacer>
                <v-icon v-if="!readonly" @click="$emit('remove', index)" :disabled="disabled" color="red">
                    mdi-close-circle-outline
                </v-icon>
            </slot>
        </template>

        <template
            v-for="header in headers"
            v-slot:[`item.${header.value}`]="{ item, index }"
        >
            <slot :name="`item.${header.value}`" :item="item" :index="index">
                <template v-if="header.value == 'no'">
                    {{ index + 1 }}
                </template>
            </slot>
        </template>

        <template v-slot:footer>
            <v-list-item v-if="!readonly">
                <v-btn @click="$emit('add')" :disabled="disableAdd" color="primary" block>
                    <v-icon dark>
                        mdi-plus-circle-outline
                    </v-icon> {{ field.toUpperCase() }}
                </v-btn>
            </v-list-item>
            <v-list-item v-if="!!form.error(field)">
                <span class="red--text">
                    {{ form.error(field) }}
                </span>
            </v-list-item>
            <slot name="footer-iterator"></slot>
        </template>
    </the-simple-iterator>
</template>

<script>
import TheSimpleTable from "@/Components/TheSimpleTable";
import TheSimpleIterator from "@/Components/TheSimpleIterator";

export default {
    components: {
        TheSimpleTable,
        TheSimpleIterator
    },
    props: {
        headers: {
            type: Array,
            default: () => []
        },
        form: {
            type: Object,
            default: () => {}
        },
        field: {
            type: String,
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        disableAdd: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style>

</style>
