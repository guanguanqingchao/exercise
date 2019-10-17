const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');


console.log('-------', path.resolve(__dirname, '..', 'src'), __dirname)
console.log('=======', path.resolve(__dirname, 'src'))


module.exports = {
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
        print: './src/print.js' //打出两个bundle
    },
    output: {
        filename: '[name].bundle.js', //打包后的名字  html中引入的名称 name id  [hash:8] chunkhash 内容hash值
        path: path.resolve(__dirname, 'dist'), //构建后的资源在本地绝对路径
        // publicPath: 'https://cdn.example.com/assets/', //构建后的资源放到cdn上
        // chunkFilename: 'vendor.js' //配置无入口的 Chunk 在输出时的文件名称,比如一些三方库
    },


    resolve: {
        alias: {

            // 'common-components': path.resolve(__dirname, '..', 'src', 'components'),
            // 'common-js': path.resolve(__dirname, '..', 'src', 'common', 'js'),
            // 'common-css': path.resolve(__dirname, '..', 'src', 'common', 'style'),
            // 'common-config': path.resolve(__dirname, '..', 'src', 'common', 'config')
        }
    },

    devtool: 'inline-source-map', //debug模式 可以定位到源文件的错误而不是打包的位置
    devServer: {
        contentBase: './dist'
    },


    module: {
        // noParse: /jquery|chartjs/, //jquery库没有模块化 解析无意义

        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                // include: path.resolve(__dirname, 'src'), //只命中该路径下的
                // exclude: path.resolve(__dirname, 'node_modules'),
                // parser: {
                //     amd: false, //禁用AMD
                //     commonjs: false, //禁用 CommonJS
                //     system: false, //禁用 SystemJS
                //     harmony: false, //禁用 ES6 import/export
                // }

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },


    plugins: [
        //注意应用{},清除bundle中的旧文件，只有构建后生成的文件
        new CleanWebpackPlugin(),
        //生成dist中html，保证html中引用entry的入口文件
        new HtmlWebpackPlugin({
            title: '管理'
        }),


    ]
}