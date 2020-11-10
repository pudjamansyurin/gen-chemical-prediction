const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js");
// .extract(["vue"]);

mix.postCss("resources/css/app.css", "public/css", [
    require("postcss-import")
]).postCss("resources/css/guest.css", "public/css", [
    require("postcss-import"),
    require("tailwindcss")
]);

mix.webpackConfig(require("./webpack.config")).version();

if (!mix.inProduction()) {
    mix.sourceMaps();
}
