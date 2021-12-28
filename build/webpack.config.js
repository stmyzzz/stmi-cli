/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-26 16:14:42
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-27 16:43:51
 */

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} =require('clean-webpack-plugin')
//处理路径
function resolve(dir){
  return path.resolve(__dirname,'../',dir)
}
const config = {
  entry:resolve('src/index.js'),
  output:{
    filename: 'js/[name].[chunkhash:8].js',
    path:resolve('dist'),
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module:{
    rules:[
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
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HTMLPlugin({
      title: '模块热替换'
    }),
    new CleanWebpackPlugin(),
  ]
}
module.exports = config
