import qs from "qs";
import { cloneDeep } from "lodash";

import { ls, bool } from "@/Utils";

export const options = {
    page: 1,
    itemsPerPage: 10,
    sortBy: ["updated_at"],
    sortDesc: [true],
    groupBy: [],
    groupDesc: [],
    multiSort: false,
    mustSort: true,
    search: "",
    mine: false
};

export const queryOptions = options => {
    let opt = cloneDeep(options);
    let query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    });

    if (query.page) opt.page = Number(query.page);
    if (query.itemsPerPage) opt.itemsPerPage = Number(query.itemsPerPage);
    if (query.sortBy) opt.sortBy = [query.sortBy[0]];
    if (query.sortDesc) opt.sortDesc = [bool(query.sortDesc[0])];
    if (query.search) opt.search = query.search;
    if (query.mine) opt.mine = bool(query.mine);

    return opt;
};
