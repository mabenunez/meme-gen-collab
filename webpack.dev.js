const merge = require('webpack-merge');
const common = './webpack.dev.js';

module.exports = merge(common, {
 mode: 'development',
 devtool: 'inline-source-map',
 devServer: {
  contentBase: './dist'
 }
});