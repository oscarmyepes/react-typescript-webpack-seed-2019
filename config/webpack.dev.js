const webpackCommon = require("./webpack.common");
const webpack = require("webpack");

module.exports = {
  ...webpackCommon,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    ...webpackCommon.plugins,
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ]
};
