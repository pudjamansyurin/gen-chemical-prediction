import { options as tableOptions, queryOptions } from "@/Config/table";

import AppTopBar from "@/Components/AppTopBar";

export default {
    components: {
        AppTopBar
    },
    props: ["items", "total"],
    data() {
        return {
            id: -1,
            selected: [],
            dialogForm: false,
            dialogDelete: false,
            options: queryOptions(tableOptions)
        };
    },
    methods: {
        onCreate() {
            this.id = -1;
            this.dialogForm = true;
        },
        onEdit(id) {
            if (this.selected.length === 0) {
                this.id = id;
                this.dialogForm = true;
            }
        },
        onDelete() {
            this.dialogDelete = true;
        }
    }
};
