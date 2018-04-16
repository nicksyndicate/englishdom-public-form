module.exports = function(grunt) {
  'use strict';

  var buildType = grunt.option('no-dev') ? 'dependencies' : ['dependencies', 'devDependencies'];
  var path = require('path');

  require('load-grunt-config')(grunt, {

    configPath: path.join(process.cwd(), 'grunt'),

    init: true,

    loadGruntTasks: {
      pattern: 'grunt-*',
      config: require('./package.json'),
      scope: buildType
    },

    data: {
      project: {
        app: './',

        publicFolder: '<%= project.app %>public',
        publicUtils: '<%= project.publicFolder %>/utils',

        modules: '<%= project.publicFolder %>/modules/',
        vendor: '<%= project.publicFolder %>/vendor-js/'
      }
    }
  });
};