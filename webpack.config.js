const path = require('path');
/* const HtmlWebpackPlugin = require('html-webpack-plugin'); */
const { VueLoaderPlugin } = require('vue-loader');
/* const CopyWebpackPlugin = require('copy-webpack-plugin'); */

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
  },
  mode: 'development',
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['vue-loader', 'vue-svg-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
