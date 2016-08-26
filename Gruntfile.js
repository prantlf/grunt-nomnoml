'use strict';

module.exports = function (grunt) {

  var coverage = process.env.GRUNT_NOMNOML_COVERAGE;

  require('time-grunt')(grunt);

  grunt.initConfig({

    jshint: {
      all:     [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
    },

    nomnoml: {
      task: {
        files: {
          'test/piracy.png': ['test/piracy.nomnoml']
        }
      }
    },

    nodeunit: {
      tests:   ['test/*_test.js']
    },

    clean: {
      tests:    ['test/piracy.png'],
      coverage: ['coverage']
    },

    instrument: {
      files: 'tasks/*.js',
      options: {
        lazy: true,
        basePath: 'coverage/'
      }
    },

    storeCoverage: {
      options: {
        dir: 'coverage'
      }
    },

    makeReport: {
      src: 'coverage/coverage.json',
      options: {
        type: 'lcov',
        dir: 'coverage',
        print: 'detail'
      }
    },

    coveralls: {
      tests: {
        src: 'coverage/lcov.info'
      }
    }

  });

  grunt.loadTasks(coverage ? 'coverage/tasks' : 'tasks');

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', coverage ?
    ['jshint', 'clean', 'instrument', 'nomnoml', 'nodeunit',
     'storeCoverage', 'makeReport'] :
    ['jshint', 'clean:tests', 'nomnoml', 'nodeunit']);

};
