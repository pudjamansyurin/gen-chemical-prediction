import { Inertia } from "@inertiajs/inertia";

import store from "@/Store";
import { ns } from "@/Utils";
import { START_LOADING, STOP_LOADING } from "@/Store/app/mutation-types";

Inertia.on("start", () => store.commit(ns("app", START_LOADING)));
Inertia.on("finish", () => store.commit(ns("app", STOP_LOADING)));
