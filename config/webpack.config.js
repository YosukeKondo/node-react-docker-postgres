const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
 template: "./src/front/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development', 
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
           presets: ["env", "react", "es2015", "stage-0"]
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

 devServer: {
  historyApiFallback: true,
  inline: true,
  open: true,
  host: 'localhost',
  port: 8080,
  proxy: {
    '/api/**': {
      target: 'http://localhost:3000',
      secure: false,
      logLevel: 'debug'
    }
  },
},

 plugins: [htmlWebpackPlugin]
};