const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/script.js"),
  output: {
    path: path.resolve(__dirname, "docs"), // destination
    filename: "bundle.js",
    clean: { // destination folder is emptied every time
        keep: /CNAME/, // keep CNAME
    },
  },
  plugins: [
    // copies HTML files in the destination
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    static: "./docs",
  },
};