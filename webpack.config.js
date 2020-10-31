const path = require("path");
// const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve("resources/js")
        }
    },
    output: {
        chunkFilename: "[name].js?id=[chunkhash]",
        publicPath: "/"
    }
    // plugins: [new VuetifyLoaderPlugin()]
    // module: {
    //     rules: [
    //         {
    //             test: /\.s(c|a)ss$/,
    //             use: [
    //                 "vue-style-loader",
    //                 "css-loader",
    //                 {
    //                     loader: "sass-loader",
    //                     // Requires sass-loader@^7.0.0
    //                     options: {
    //                         implementation: require("sass"),
    //                         indentedSyntax: true // optional
    //                     },
    //                     // Requires sass-loader@^8.0.0
    //                     options: {
    //                         implementation: require("sass"),
    //                         sassOptions: {
    //                             indentedSyntax: true // optional
    //                         }
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // }
};
