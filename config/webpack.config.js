const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
 template: "./src/front/index.html",
 filename: "./index.html"
});
module.exports = {
 entry: "./src/front/js/main.js",
 output: {
   path: path.resolve('dist'),
   filename: '[name].js'
 },
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader",
         options: {
           presets: ["env", "react", "es2015"]
         }
       }
     },
     {
       test: /\.css$/,
       use: ["style-loader", "css-loader"]
     }
   ]
 },

 resolve: {
   extensions: [".js", ".jsx"]
 },

 plugins: [htmlWebpackPlugin]
};