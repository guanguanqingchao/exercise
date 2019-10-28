const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// const extractTextPlugin = require('extract-text-webpack-plugin')
// for webpack4
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const BasicPlugin = require('./BasicPlugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');



module.exports = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        filename: '[name].[hash].bundle.js', //打包后的名字  html中引入的名称 name id  [hash:8] chunkhash 内容hash值
        path: path.resolve(__dirname, 'dist'), //构建后的资源在本地绝对路径
    },
    resolve: {
        alias: {
            'pages': path.resolve(__dirname, 'src/pages'),
            'actions': path.resolve(__dirname, 'src/actions', ),
            'reducers': path.resolve(__dirname, 'src/reducers'),
            'store': path.resolve(__dirname, 'src/store'),
            'middleware': path.resolve(__dirname, 'src/middleware'),
            'saga': path.resolve(__dirname, 'src/saga')
        }
    },



    module: {

        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            // publicPath: '../',
                            // hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],


            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // 小于 10kB(10240字节）的内联文件,编码成base64格式，相当于把图片翻译成一串字符，将字符打包到bundle中，减少服务器请求
                    limit: 500 * 1024,
                },
            },


        ]
    },
    // optimization: {
    //     splitChunks: {
    //       chunks: 'async',
    //       minSize: 30000,
    //       maxSize: 0,
    //       minChunks: 1,
    //       maxAsyncRequests: 5,
    //       maxInitialRequests: 3,
    //       automaticNameDelimiter: '~',
    //       name: true,
    //       cacheGroups: {
    //         vendors: {
    //           test: /[\\/]node_modules[\\/]/,
    //           priority: -10
    //         },
    //         default: {
    //           minChunks: 2,
    //           priority: -20,
    //           reuseExistingChunk: true
    //         }
    //       }
    //     }
    //   }

    optimization: {
        //将runtime移动到独立的文件中
        // runtimeChunk: {
        //     name: "manifest",
        // },
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all', //all所有,initial同步
            minSize: 0, //module大小超过才split
            maxSize: 0,
            minChunks: 1, //module至少被多少chunk 引用才会生成新chunk。
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',

            name: true,

            cacheGroups: {
                // vendor: {
                //     test: /[\\/]node_modules[\\/]/,
                //     priority: -10, // 优先级，一个module可能被多个chunk引用，会被打包到优先级高的chunk里
                //     name: 'vendor'
                // },
                // util: {
                //     test: /src\/util/,
                //     minChunks: 1000,
                //     priority: 0,
                //     name: 'util'
                //     // reuseExistingChunk: true,
                //     // enforce: true
                // },

                // default: false

                // vendors: { // 项目基本框架等
                //     chunks: 'all',
                //     test: /(react|react-dom|react-dom-router|babel-polyfill|mobx)/,
                //     priority: 100,
                //     name: 'vendors',
                //   },
                // 'async-commons': { // 异步加载公共包、组件等
                //     // test: /src\/[c]/,
                //     test: /[\\/]node_modules[\\/]react/,
                //     chunks: 'async',
                //     minChunks: 1,
                //     name: 'async-commons',
                //     priority: 90,
                // },
                // commons: { // 其他同步加载公共包
                //     chunks: 'all',
                //     test: /src\/[ab]/,
                //     minChunks: 2,
                //     name: 'commons',
                //     priority: 80,
                // },


            }
        },
    },

    plugins: [
        //注意应用{},清除bundle中的旧文件，只有构建后生成的文件
        new CleanWebpackPlugin(),

        //生成dist中html，保证html中引用entry的入口文件
        new HtmlWebpackPlugin({
            template: './src/index.html', //指定dist中的html
            filename: 'index.html',
            inlineSource: 'runtime~.+\\.js',
        }),

        //内联嵌入runtime文件
        new InlineSourcePlugin(),


        //将css从js bundle中提取出来
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[contenthash].style.css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),


        // new BasicPlugin({
        //     name: 'demo'
        // })



    ]
}