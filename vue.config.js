const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://127.0.0.1:8080',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                  '^/api': '',
              },
          },
      },
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },

    plugins: [
      new MonacoWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          APP_VERSION: JSON.stringify(require('./package.json').version),
        }
      })
    ],
  }
}
