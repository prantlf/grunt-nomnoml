'use strict';

const { statSync } = require('fs');
const { join } = require('path');

exports.nomnoml = {
  png: function (test) {
    const output = statSync(join(__dirname, 'piracy.png'));
    test.ok(output.isFile() && output.size > 0, 'creates a PNG file');
    test.done();
  },
  svg: function (test) {
    const output = statSync(join(__dirname, 'piracy.svg'));
    test.ok(output.isFile() && output.size > 0, 'creates a SVG file');
    test.done();
  }
};
