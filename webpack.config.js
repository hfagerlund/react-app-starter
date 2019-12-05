var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.htm',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devServer: {
    publicPath: '/build/',
    open: true,
    openPage: 'build/index.htm'
  },
  plugins: [HTMLWebpackPluginConfig]
};
