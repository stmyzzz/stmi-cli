/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-26 16:14:42
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-28 17:32:25
 */

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} =require('clean-webpack-plugin')
//处理路径
function resolve(dir){
  return path.resolve(__dirname,'../',dir)
}
const config = {
  entry:["@babel/polyfill",resolve('src/index.js')],
  output:{
    filename: 'js/[name].[chunkhash:8].js',
    path:resolve('dist'),
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          },
        },
         exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.jsx/,
        loader:'babel-loader'
      },
      {
        test:/\.(gif|jpg|png|svg|jpeg)$/,
        type:'asset',
        generator: {
          filename: 'img/[hash][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          filename: "[name][hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过100kb不转 base64
          }
        }
      },
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.runtime.esm.js',
      '@':resolve('src')
    },
    extensions:['*','.js','.json','.vue']
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
      title: '模块热替换',
    }),
    new CleanWebpackPlugin(),
  ]
}
module.exports = config
