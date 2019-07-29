const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Development Mode, and add Rules
module.exports = merge(common, {
 mode: 'development',
 devtool: 'inline-source-map',
 devServer: {
  contentBase: './dist'
 }
});