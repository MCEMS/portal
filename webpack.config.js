var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    filename: './dist/app.js',
    publicPath: 'http://localhost:8090/portal'
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './dist/index.html',
      template: './src/html/portal.ejs',
      inject: 'body',
      title: 'MCEMS Member Portal'
    }),
    new ExtractTextPlugin('./dist/app.css', {
      allChunks: true
    })
  ]
}
