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
    }]
  }
};

