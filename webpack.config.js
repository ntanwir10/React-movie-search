const path = require("path");
const HtmlWebPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // publicPath: "/app"
    },
    module: {
        rules: [{
                test: /\.js?/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};

module.exports = config;