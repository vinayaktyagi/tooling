const merge = require("webpack-merge");
const baseconfig = require("./webpack.config.base");

module.exports = merge(baseconfig, {
  mode: "development"
});
