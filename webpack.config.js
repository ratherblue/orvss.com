const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: './docs'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?url=false!postcss-loader!less-loader'),
        options: { url: false }
      },
    ]
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginCleanCSS({advanced: true})
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  }
};

module.exports = config;
