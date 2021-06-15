const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
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
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // css loader reads file and returns contents,
          // style loader injects css into dom
          "style-loader",
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
};
