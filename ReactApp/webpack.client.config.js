const merge = require("webpack-merge");
const webpack = require("webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const baseConfig = require("./src/config/webpack/webpack.config.base");

// Compression
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

// Module export via CommonJS style
module.exports = env => {
  const config = {
    mode: env.NODE_ENV,

    entry: {
      // Starting file to build our client side
      client: ["./src/Client.tsx"]
    },

    output: {
      filename: "[name].js",
      publicPath: "/",
      chunkFilename: "[name].bundle.js"
      //path: path.resolve(__dirname, 'public') // For absolute path
    },

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


      ]
    },

    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        /Bundles.tsx/,
        "./Async-Bundles.tsx"
      ),

      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),

      new TerserWebpackPlugin(),

      new CompressionWebpackPlugin({
        algorithm: "gzip"
      }),

      new BrotliPlugin()
    ],

    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: "all"
      },
      minimizer: [
        //Incase you want to uglify/minify js
        new OptimizeCssAssetsPlugin({
          //cssProcessor: require("cssnano"),
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true
        })
      ]
    }
  };

  return merge(baseConfig, config);
};
