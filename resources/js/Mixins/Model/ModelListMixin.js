import { omit, debounce } from "lodash";

import TheData from "@/Components/TheData";

export default {
    components: {
        TheData
    },
    props: {
        selected: {
            type: Array,
            default: () => []
        },
        options: {
            type: Object,
            default: () => {}
        },
        items: {
            type: Array,
            default: () => []
        },
        total: {
            type: Number,
            default: 0
        },
        canCreate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            fetching: false,
            ignoredOptions: ["groupBy", "groupDesc", "mustSort", "multiSort"]
        };
    },
    created() {
        if (!this.canCreate) this.ignoredOptions.push("mine");
    },
    methods: {
        chip(item) {
            return item.authorized ? "primary" : "grey";
        },
        edit(item) {
            this.$emit("edit", item.id);
        }
    },
    watch: {
        options: {
            handler: debounce(function(value) {
                this.$inertia.replace(
                    route(route().current(), omit(value, this.ignoredOptions)),
                    {
                        preserveScroll: !this.mobile,
                        onStart: visit => (this.fetching = true),
                        onFinish: () => (this.fetching = false),
                        only: ["status", "items", "total"]
                    }
                );
            }, 500)
        }
    }
};
