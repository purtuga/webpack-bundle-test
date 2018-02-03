const path = require("path");

module.exports = {
    entry: "./src/index",

    output: {
        library: "webpackBundleTest",
        libraryTarget:  "umd",
        filename:       "webpackBundleTest.js",
        path:           path.join(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['babel-preset-env', {
                                "modules": false,
                                targets: { "uglify": true }
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:   /\.html$/,
                use:    ["raw-loader"]
            },
            {
                test:   /\.(eot|ttf|svg|woff|png|gif)(\?.*)?$/,
                use:    [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 150000
                        }
                    }
                ]
            }
        ]
    }
};
