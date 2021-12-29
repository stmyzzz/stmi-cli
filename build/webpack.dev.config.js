/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-27 11:37:18
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-29 13:48:31
 */
const {merge} = require('webpack-merge')
const common = require('./webpack.config.js')
const webpack = require('webpack')
const path = require('path')

const devConfig = merge(common,{
  mode:'development',
  devtool:'eval-cheap-module-source-map',
  devServer:{ 
    static:['assets'], //本地开发直接读取静态文件资源 提高性能
    port:8000,
    host:'0.0.0.0',
    compress:true,
    client:{
      overlay: {
      errors:true,
      warnings:true
      } 
    },
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ]
    },
  },
  module:{
    rules:[
      {
        test: /\.(le|c)ss$/,
        use:[
          'style-loader',  // 通过 style 标签注入
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true // 根据 less-loader 生成的 sourceMap 继续编译，加快处理速度
            },
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
})

module.exports = devConfig 