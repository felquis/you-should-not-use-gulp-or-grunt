const path = require('path')
const webpack = require('webpack')
const ExtractText = require('extract-text-webpack-plugin')
const extractCSS = new ExtractText('style.css')
const WebpackHTML = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: extractCSS.extract(['css?modules'])
    }, {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      loader: 'file'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: { presets: ['es2015'] }
    }]
  },
  plugins: [
    new WebpackHTML({
      title: 'Raio Webpackrizante'
    }),
    extractCSS,
    new webpack.optimize.UglifyJsPlugin(),
    new FaviconsWebpackPlugin(__dirname + '/app/images/logo.png')
  ]
}
