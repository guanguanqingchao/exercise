 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;





 module.exports = merge(common, {
     mode: 'production', //默认启用uglyfyJS移除dead code
     devtool: 'source-map', //避免inline增大bundle体积

     plugins: [
         //  new BundleAnalyzerPlugin(),
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': '"production"',
             //  'process.env.NODE_ENV': JSON.stringify("production"),
             PRODUCTION: JSON.stringify(true),
             VERSION: JSON.stringify('5fa3b9'),
         }),

     ]
 });