const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const destinationFolder = "docs";

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, destinationFolder),
    clean: {
      keep(asset) {
        return /CNAME/.test(asset) ||  /robots.txt/.test(asset); // CNAME file is required for a custom domain with GitHub pages
      },
    },
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  watch: false,
});
