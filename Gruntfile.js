/*
 * grunt-htmlcommenttemplate
 * https://github.com/daikiueda/grunt-htmlcommenttemplate
 *
 * Copyright (c) 2015 daikiueda, @ue_di
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['.tmp']
    },

    copy: {
      tests: {
        expand: true,
        cwd: './test/fixtures/',
        src: '**/*.*',
        dest: './.tmp',
        filter: 'isFile',
      }
    },

    mochaTest: {
      tests: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.test.js']
      }
    },

    // Configuration to be run (and then tested).
    htmlcommenttemplate: {
      tests: {
        templateDir: "./.tmp/utf8/Templates",
        html: "./.tmp/utf8/htdocs/**/*.html"
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-Test');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'htmlcommenttemplate', 'mochaTest']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
