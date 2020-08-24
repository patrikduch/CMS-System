const merge = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const baseConfig = require("./src/config/webpack/webpack.config.base");


// Module export via CommonJS style
module.exports = (env) => {
  const isDev = env.NODE_ENV == "production" ? true : false;
  const config = {
    target: "node",

    mode: env.NODE_ENV,

    //mode: 'development',

    entry: {
      /* Starting file for our server setup. */
      server: "./src/Server.tsx",
    },

    // Tell webpack to run babel on every file it runs through
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: ["babel-loader", "ts-loader", "eslint-loader"]
        },
  
        {
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader?limit=100000"
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
            "sass-loader",
          ],
        },

        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: [
                  require("autoprefixer")({}),
                  require("cssnano")({ preset: "default" }),
                ],
                minimize: true,
              },
            },
          ],
        },
      ],
    },

    output: {
      filename: "[name].js",
      publicPath: "/src",
    },

    optimization: {
      minimizer: [
        //Incase you want to uglify/minify js
        new OptimizeCssAssetsPlugin({
          cssProcessor: require("cssnano"),
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true,
        }),
      ],
    },

    plugins: [
      new webpack.IgnorePlugin(/html-to-draftjs$/),


      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        //both options are optional
        filename: "App.css",
        chunkFilename: "",
      }),

      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV),
        },
      }),
    ],
  };

  return merge(baseConfig, config);
};
