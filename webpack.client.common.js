const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const outputDirectory = 'dist/public'
const apiUrl = typeof process.env.API_URL !== 'undefined' ? process.env.API_URL : 'http://localhost:3001/api/v1'

module.exports = {
  entry: {
    app: './src/client/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      // Load a custom template
      template: 'src/client/index.html',
      favicon: 'src/client/favicon.ico'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/client/sitemap.xml', to: path.resolve(__dirname, outputDirectory) },
        { from: 'src/client/robots.txt', to: path.resolve(__dirname, outputDirectory) }
      ]
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(apiUrl)
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, outputDirectory),
    publicPath: '/'
    // publicPath: '/sotasurmat/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
