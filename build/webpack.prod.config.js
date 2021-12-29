/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-27 11:37:44
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-29 14:33:01
 */
const {merge} = require('webpack-merge')
const common = require('./webpack.config.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob')
const path = require('path')
const PATHS = {
  src: path.join(__dirname, 'src')
}
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");//压缩分离出来的css代码
const os = require('os');
const prodConfig = merge(common,{
  mode:'production',
  module:{
    rules:[
      {
        test: /\.(le|c)ss$/,
        use:[
          MiniCssExtractPlugin.loader,  // 通过 link 标签注入
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
  ],
  optimization:{
    minimize: true,
    minimizer: [
      new TerserPlugin({
      parallel:os.cpus().length - 1, //使用多进程并发运行以提高构建速度。
      extractComments: false,
      terserOptions: {
        compress: true,
        sourceMap:true,
      },
    }),
    new OptimizeCssAssetsWebpackPlugin(), //压缩.css
    ],
    splitChunks:{
      cacheGroups:{
        default: false,
        styles: {
          name: 'styles',
          test: /\.(s?css|less|sass)$/,
          chunks: 'all',
          enforce: true,
          priority: 10,
        },
        common: {
          name: 'chunk-common',
          chunks: 'all',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1,
          enforce: true,
          reuseExistingChunk: true,
        },
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 2,
          enforce: true,
          reuseExistingChunk: true,
        }
      }
    },
    runtimeChunk:true  //优化持久化缓存
  }
})
module.exports = prodConfig