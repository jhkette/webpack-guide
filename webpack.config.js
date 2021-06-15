const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    // hashing function for bundle
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    // specify the base path for all the assets
    //
    // Try the environment variable, otherwise use root
    // const ASSET_PATH = process.env.ASSET_PATH || '/';
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(ttf)$/,
        type: "asset",
      },
      {
        // rules for images
        test: /\.(png|jpg)$/,
        type: "asset/inline",
        // if file is larger than 3kb then resource assetype otherwise inline
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // css loader reads file and returns contents,
          // style loader injects css into dom
          MiniCssPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // css loader reads file and returns contents,
          // style loader injects css into dom
          MiniCssPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // preset for javascript
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins:[
      new TerserPlugin(),
      new MiniCssPlugin({
        //   hashing for css
          filename: 'styles.[contenthash].css'
      })
  ]
};
