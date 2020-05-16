const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseconfig = require("./webpack.config.base");

module.exports = merge(baseconfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "bundle_sizes.html",
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});
