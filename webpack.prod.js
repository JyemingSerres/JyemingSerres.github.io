const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "docs"),
    clean: {
      keep(asset) {
        return /CNAME/.test(asset) ||  /robots.txt/.test(asset); // CNAME file is required for a custom domain with GitHub pages
      },
    },
  },
  watch: false,
});
