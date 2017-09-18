const webpack = require('webpack');
const PATHS = require('./config/paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.static,
    pathinfo: true,
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin({ disable: true }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      app: PATHS.app,
      pages: PATHS.pages,
      routes: PATHS.routes,
      modules: PATHS.modules,
      components: PATHS.components,
      icons: PATHS.icons,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                minimize: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
        // loader: 'react-svg-loader',
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    noInfo: false,
    host: '0.0.0.0',
    port: 3030,
    historyApiFallback: true,
    contentBase: PATHS.static,
  },
};
