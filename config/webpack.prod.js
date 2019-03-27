const webpackCommon = require("./webpack.common");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  ...webpackCommon,
  mode: "production",
  plugins: [
    ...webpackCommon.plugins,
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  optimization: {
    minimize: false
  }
};
