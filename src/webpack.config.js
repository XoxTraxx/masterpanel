const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "RenderHtmlCss.js",
  output: {
    path: __dirname + "/dist",
    filename: "./pages/viewPage/RenderHtmlCss.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
