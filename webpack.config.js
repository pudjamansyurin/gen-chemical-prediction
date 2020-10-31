const path = require("path");

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
};
