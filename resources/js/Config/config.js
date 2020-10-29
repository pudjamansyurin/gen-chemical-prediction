const production = process.env.NODE_ENV === "production";

export const APP_DEBUG = !production;

export const APP_NAME = process.env.MIX_APP_NAME;

export const APP_URL = production
    ? process.env.MIX_APP_PROD_URL
    : process.env.MIX_APP_URL;
