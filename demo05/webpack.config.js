let path = require('path')
let webpack = require('webpack')
// 引入webpack自己的插件，uglifyJsPlugin插件可以对目标js进行压缩
let uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// 第三方webpack插件
let HtmlWebpackPlugin = require('html-webpack-plugin')
let OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
  entry: './main.js',
  output: {
    // path必须是绝对路径
    // 使用path定位到webpack.config.js文件在硬盘上的绝对路径
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      // 查询参数两种方式：
      // loader: 'babel-loader?presets[]=es2015'
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      // 必须写完整的loader，写成 style!css 要报错
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpe?g)$/,
      loader: 'url-loader',
      query: {
        // 超过8K通过路径引用图片,否则使用base64编码直接嵌入文件中
        limit: 8092,
        // 图片路径
        name: path.posix.join('img/[name].[hash:7].[ext]')
      }
    }]
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Demo05',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};

