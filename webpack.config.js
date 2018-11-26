
const webpack = require('webpack');

const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{
        test1:'./test1.js'
    },
    output:{
        path: path.resolve(__dirname, 'dest'),
        filename:'all.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                  }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            //filename:'index-[hash].html',          // 指定打包后的名称
            filename:'index.html',                       // 指定打包后的名称
            template:'./index.html',                   // 打包的模板页面
            inject:'body',                           // 指定脚本放在哪个位置。此处放在头部
            title: 'es6-测试页面',                              //在 html 引用 <title><%= htmlWebpackPlugin.options.title%></title>
            chunks: ["test1"]                     // 指定当前的 HTML 里面包含的 chunks
            
        })
    ],
   
    devServer: {
        contentBase: path.join(__dirname, 'dest'),
        compress: true,
        port: 8000
    } 
}