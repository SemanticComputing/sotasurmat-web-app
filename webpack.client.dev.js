const { merge } = require('webpack-merge')
const common = require('./webpack.client.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8080,
    open: true,
    // historyApiFallback: { index: '/sotasurmat' },
    // publicPath: '/sotasurmat',
    historyApiFallback: true,
    devMiddleware: {
      publicPath: '/'
    }
  }
})
