const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/main.ts"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
    host: "localhost",
    port: 8080,
    hot: true,
    hotOnly: true,
    compress: true
  }
};
