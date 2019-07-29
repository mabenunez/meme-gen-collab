const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Modules supported: js jsx css scss html
//Requiring Webpack for Hot Module Reload

module.exports = {
 entry: './src/index.js',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].bundle.js'
 },
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
    },
   },
   {
    test: /\.(css|scss)$/,
    use: [
    {
     loader: MiniCssExtractPlugin.loader,
     options: {
      publicPath: '../',
     },
    },
    'css-loader',
    ],
   },
   {
    test: /\.html$/,
    use: {
     loader: 'html-loader',
     options: {
      minimize: true
     },
    },
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   filename: './index.html',
   template: './public/index.html'
  }),
  new MiniCssExtractPlugin({
   filename: 'css/[name].bundle.css',
   chunkFilename: '[id].bundle.css'
  }),
 ]
}