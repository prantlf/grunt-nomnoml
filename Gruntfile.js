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
      tests:   ['test/*_test.js'],
      options: {
        reporter: coverage ? 'lcov' : 'verbose',
        reporterOutput: coverage ? 'coverage/tests.lcov' : undefined
      }
    },

    clean: {
      tests:    ['test/piracy.png'],
      coverage: ['coverage']
    },

    jscoverage: {
      tasks: {
        expand: true,
        cwd:    'tasks/',
        src:    '*.js',
        dest:   'coverage/tasks/'
      }
    },

    coveralls: {
      tests: {
        src: 'coverage/tests.lcov'
      }
    }

  });

  grunt.loadTasks(coverage ? 'coverage/tasks' : 'tasks');

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['jshint', 'clean:tests', 'nomnoml', 'nodeunit']);
  grunt.registerTask('instrument', ['jshint', 'clean', 'jscoverage']);
  grunt.registerTask('post_coverage', ['test', 'coveralls']);
  grunt.registerTask('default', ['test']);

};
