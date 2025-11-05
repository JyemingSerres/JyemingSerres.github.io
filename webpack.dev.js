const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const destinationFolder = "docsdev";

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, destinationFolder),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    static: destinationFolder,
  },
});
