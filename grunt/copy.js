/**
 * Created by nick on 30.11.16.
 */

module.exports = {
  js: {
    files: [
      {
        cwd: './node_modules',
        expand: true,
        dest: '<%= project.publicFolder %>/vendor-js',

        src: [
          'intl-tel-input/build/js/intlTelInput.js',
          'intl-tel-input/build/css/intlTelInput.css',
          'intl-tel-input/build/img/flags.png',
          'intl-tel-input/build/img/flags@2x.png',
          'intl-tel-input/lib/libphonenumber/build/utils.js',
          'jquery/dist/jquery.js',
          'underscore/underscore.js',
          // for IE11
          'es6-promise/dist/es6-promise.js',
          'babel-polyfill/dist/polyfill.js'  
        ]
      }
    ]
  }
};