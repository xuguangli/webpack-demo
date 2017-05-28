module.exports = {
  entry: './main.js',
  output: {
    filename: './dist/bundle.js'
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
      //必须写完整的loader，写成 style!css 要报错
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpe?g)$/,
      loader: 'url-loader',
      query: {
        //超过8K通过路径引用图片,否则使用base64编码直接嵌入文件中
        limit: 8092
      }
    }]
  }
};

