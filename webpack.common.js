const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:  {
    index: path.resolve(__dirname, "src/assets/js/index.js"),
    projects: path.resolve(__dirname, "src/assets/js/projects.js"),
    resume: path.resolve(__dirname, "src/assets/js/resume.js"),
  },
  output: {
    filename: "[name].bundle.js",
  },
  plugins: [
    // copies HTML files in the destination, see https://github.com/jantimon/html-webpack-plugin
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      chunks: ["index"],
    }),
    new HTMLWebpackPlugin({
      filename: "projects.html",
      template: path.resolve(__dirname, "src/projects.html"),
      chunks: ["projects"],
    }),
    new HTMLWebpackPlugin({
      filename: "resume.html",
      template: path.resolve(__dirname, "src/resume.html"),
      chunks: ["resume"],
    }),
  ],
};
