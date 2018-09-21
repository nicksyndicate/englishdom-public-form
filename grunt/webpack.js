module.exports = function(grunt) {
  var fs = require('fs');
  var webpack = require('webpack');
  var CleanWebpackPlugin = require('clean-webpack-plugin');
  var path = require('path');

  function getEntry(pagesDir) {
    var entries = fs.readdirSync(pagesDir).filter(function(file) {
        return file.match(/.*\.js$/);
      }),
      entry = {};

    for (var i = 0; i < entries.length; i++) {
      entry[entries[i].split('.')[0]] = pagesDir + entries[i];
    }

    return entry;
  }

  return {
    form: {
      devtool: 'eval',
      progress: true,
      failOnError: true,
      entry: getEntry('./public/modules/'),
      output: {
        publicPath: '/public/bundles/js/',
        path: path.resolve(__dirname, '../public/bundles/js'),
        filename: '[name].min.js',
        chunkFilename: '[id].' + new Date().getTime() + '.js',

        sourceMapFilename: '[file].map'
      },

      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: false
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
