// grunt-nomnoml
// https://github.com/prantlf/grunt-nomnoml
//
// Copyright (c) 2015-2022 Ferdinand Prantl
// Licensed under the MIT license.
//
// Generates images from nomnoml diagram sources.

'use strict';

const generateDiagram = require('nomnoml-cli');
const { join, parse, dirname } = require('path');

module.exports = function (grunt) {
  function processDiagram(fileSrc, fileDest, options) {
    try {
      grunt.log.subhead('Processing diagram "' + fileSrc + '"');
      return generateDiagram(Object.assign({
        inputFile: fileSrc,
        output: fileDest
      }, options));
    } catch (error) {
      grunt.log.error(error);
      grunt.fail.warn('Processing diagram "' + fileSrc + '" failed\n');
    }
  }

  grunt.registerMultiTask('nomnoml', "Generate images from nomnoml diagram sources", function () {
    const done = this.async();
    const options = this.options({});
    let { format = 'png' } = options;
    format = format.toLowerCase();
    const promises = this.files.map(function (file) {
      // If multiple source files are specified, the destination
      // path should point to a directory
      const single = file.orig.src.length === 1 &&
        !file.orig.src.some(function (src) {
          return src.indexOf('*') >= 0 || src.indexOf('?') >= 0;
        });
      const promises = file.src.map(function (src) {
        // If the destination is a directory, use the source file name
        // with the '.png' or format-dependent extension
        const dest = single ? file.dest : join(file.dest, parse(src).name + '.' + format);
        const dir = dirname(dest);
        grunt.file.mkdir(dir);
        return processDiagram(src, dest, options);
      });
      return Promise.all(promises);
    });
    Promise
      .all(promises)
      .then(done);
  });
};
