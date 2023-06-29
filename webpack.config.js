var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'home.html',
  inject: 'body'
});

const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.jsx',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  mode: 'development',
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
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    open: ['build/home.html']
  },
  plugins: [HTMLWebpackPluginConfig]
};
