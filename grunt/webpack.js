module.exports = function(grunt) {
  var fs = require('fs');
  var webpack = require('webpack');
  var CleanWebpackPlugin = require('clean-webpack-plugin');
  var path = require('path');

  return {
    form: {
      devtool: 'source-map',
      progress: true,
      failOnError: true,
      entry: {
        'form-logic': path.resolve(__dirname, '../public/modules/form-logic.js'),
        'form-logic.min': path.resolve(__dirname, '../public/modules/form-logic.js'),
      },
      output: {
        publicPath: '/public/bundles/js/',
        path: path.resolve(__dirname, '../public/bundles/js'),
        filename: '[name].js',
      },

      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          include: /\.min\.js$/,
          minimize: true,
          sourceMap: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
          exclude: /\.min\.js$/,
          minimize: false,
          sourceMap: false,
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
       ],

      resolve: {
        modules: ['<%= project.modules %>', '<%= project.vendor %>'],

        alias: {
          'logic': 'form-logic/form-logic',
          'jquery': 'jquery/dist/jquery',
          'underscore': 'underscore/underscore',
          'input-tel': 'intl-tel-input/build/js/intlTelInput',
          'babel-polyfill': 'babel-polyfill/dist/polyfill',
        }
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['es2015', { 'modules': false }]
                ],
                plugins: ['transform-object-rest-spread']
              }
            }
          }
        ]
      }
    }
  };
};
