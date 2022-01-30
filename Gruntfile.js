'use strict';

module.exports = function (grunt) {
  const { GRUNT_NOMNOML_COVERAGE: coverage } = process.env;

  require('time-grunt')(grunt);

  grunt.initConfig({
    eslint: {
      target: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    nomnoml: {
      png: {
        files: {
          'test/piracy.png': ['test/piracy.nomnoml']
        }
      },
      svg: {
        options: {
          format: 'svg'
        },
        files: {
          'test/piracy.svg': ['test/piracy.nomnoml']
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
    }
  });

  grunt.loadTasks(coverage ? 'coverage/tasks' : 'tasks');

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', coverage ?
    ['eslint', 'clean', 'nomnoml', 'nodeunit',
     'storeCoverage', 'makeReport'] :
    ['eslint', 'clean:tests', 'nomnoml', 'nodeunit']);
};
