import { ls, bool } from "@/Utils";
import qs from "qs";

let query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true
});

export const options = {
    page: Number(query.page) || 1,
    itemsPerPage: Number(query.itemsPerPage) || 10,
    sortBy: [query.sortBy ? query.sortBy[0] : "updated_at"],
    sortDesc: [query.sortDesc ? bool(query.sortDesc[0]) : true],
    groupBy: [],
    groupDesc: [],
    multiSort: false,
    mustSort: true,
    search: query.search || "",
    mine: bool(query.mine) || false
};
