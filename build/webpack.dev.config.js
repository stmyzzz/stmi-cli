/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-27 11:37:18
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-28 11:54:58
 */
const {merge} = require('webpack-merge')
const common = require('./webpack.config.js')
const webpack = require('webpack')
const path = require('path')
const devConfig = merge(common,{
  mode:'development',
  devtool:'eval-cheap-module-source-map',
  devServer:{ 
    port:8000,
    host:'0.0.0.0',
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
          'style-loader',
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