/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-27 11:37:44
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-28 17:51:31
 */
const {merge} = require('webpack-merge')
const common = require('./webpack.config.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const os = require('os');
const path = require('path')
const prodConfig = merge(common,{
  mode:'production',
  module:{
    rules:[
      {
        test: /\.(le|c)ss$/,
        use:[
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename:'css/[name].[chunkhash:8].css',
      chunkFilename:'css/[name].[chunkhash:8].css',
    }),
    new CopyWebpackPlugin(
     { 
      patterns:[{
      from:path.resolve(__dirname,'../src/assets'),
      to:path.resolve(__dirname,'../dist/img')
        }]
      }
    )
    ,
  ],
  optimization:{
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel:os.cpus().length - 1, //使用多进程并发运行以提高构建速度。
      extractComments: false,
      terserOptions: {
        compress: true,
        sourceMap:true,
      },
    })],
    splitChunks:{
      chunks: 'all',
      cacheGroups:{
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial" // 只打包初始时依赖的第三方
        }
      }
    },
    runtimeChunk:true
  }
})
module.exports = prodConfig