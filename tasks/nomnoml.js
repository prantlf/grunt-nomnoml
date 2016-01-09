// grunt-nomnoml
// https://github.com/prantlf/grunt-nomnoml
//
// Copyright (c) 2015 Ferdinand Prantl
// Licensed under the MIT license.
//
// Generates images from nomnoml diagram sources.

'use strict';

var generateDiagram = require('nomnoml-cli'),
    path = require('path'),
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
          // If multiple source files are specified, the destination
          // path should point to a directory
          var single = file.orig.src.length === 1 &&
                file.orig.src.findIndex(function (src) {
                  return src.indexOf('*') >= 0 || src.indexOf('?') >= 0;
                }) < 0,
              promises = file.src.map(function (src) {
                // If the destination is a directory, use the source file name
                // with the '.png' extension
                var dest = single ? file.dest : path.join(file.dest,
                      path.parse(src).name + '.png'),
                    dir = path.dirname(dest);
                grunt.file.mkdir(dir);
                return processDiagram(src, dest);
              });
          return Q.all(promises);
        });
    Q.all(promises)
     .then(done);
  });
};
