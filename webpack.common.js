const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:  {
    index: path.resolve(__dirname, "src/assets/js/index.js"),
  },
  output: {
    filename: "assets/js/[name].bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
    ]
  },
  plugins: [
    // copies HTML files in the ouput, see https://github.com/jantimon/html-webpack-plugin
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      favicon: path.resolve(__dirname, "src/assets/images/favicon.png"),
      chunks: ["index"],
    }),
  ],
};
