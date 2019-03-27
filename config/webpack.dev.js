const webpackCommon = require("./webpack.common");

module.exports = {
  ...webpackCommon,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
};
