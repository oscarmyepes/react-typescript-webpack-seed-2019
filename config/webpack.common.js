const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Test App",
      template: path.resolve("./src/index.html")
    }),
    new CopyPlugin([
      { from: path.resolve("./src/static"), to: path.resolve("./dist/static") }
    ]),
    new Dotenv()
  ]
};
