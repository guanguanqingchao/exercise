 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');

 module.exports = merge(common, {
     mode: 'development',
     devtool: 'inline-source-map',
     //具有实时重加载 Project is running at http://localhost:8080/
     devServer: {
         contentBase: './dist', //告知服务器从哪个目录中提供内容
         //  publicPath: '', //  默认是 / ,可以通过http://0.0.0.0:9000/app.bundle.js访问
         compress: true, //gzip
         historyApiFallback: true, //404 响应都可能需要被替代为 index.html
         host: '0.0.0.0', //希望服务器外部访问   默认是localhost
         hot: true, // 模块热替换
         open: true, //server启动后自动打开浏览器
         port: 9000,
         //  proxy: {
         //      '/api': 'http://localhost:3000'
         //  }

     },



     plugins: [
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': '"development"',
             //  'process.env.NODE_ENV': JSON.stringify("development"),
             PRODUCTION: JSON.stringify(false),
             VERSION: JSON.stringify('DEVELOPMENT_VERSION')
         }),
     ]
 });