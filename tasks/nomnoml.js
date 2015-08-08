// grunt-nomnoml
// https://github.com/prantlf/grunt-nomnoml
//
// Copyright (c) 2015 Ferdinand Prantl
// Licensed under the MIT license.
//
// Generates images from nomnoml diagram sources.

'use strict';

var generateDiagram = require('nomnoml-cli'),
    Q = require('q');

module.exports = function (grunt) {

  function processDiagram(fileSrc, fileDest) {
    try {
      grunt.log.subhead('Processing diagram "' + fileSrc + '"');
      return generateDiagram({
        inputFile: fileSrc,
        output: fileDest
      });
    } catch (error) {
      grunt.log.error(error);
      grunt.fail.warn('Processing diagram "' + fileSrc + '" failed\n');
    }
  }

  grunt.registerMultiTask('nomnoml', "Generate images from nomnoml diagram sources", function () {
    var done = this.async(),
        promises = this.files.map(function (file) {
          return processDiagram(file.src[0], file.dest);
        });
    Q.all(promises)
     .then(done);
  });
};
