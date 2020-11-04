import { ls } from "@/Utils";

export const options = {
    page: 1,
    itemsPerPage: ls.get("perPage") || 10,
    multiSort: false,
    mustSort: true,
    groupBy: [],
    groupDesc: [],
    sortBy: ["updated_at"],
    sortDesc: [true],
    search: "",
    mine: false
};
