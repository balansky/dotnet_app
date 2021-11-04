const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function(_env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: {
        home: './src/pages/home/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dotnet_mvc/dotnet_mvc/wwwroot/js'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: isProduction ? 'production' : 'development'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: ({ chunk }) => `${chunk.name.replace("/js/", "/css/")}.css`,
        }),
    ]
  };
};