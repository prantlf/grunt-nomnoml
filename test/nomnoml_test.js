'use strict';

const { statSync } = require('fs');
const { join } = require('path');

exports.nomnoml = {
  task: function (test) {
    var output = statSync(join(__dirname, 'piracy.png'));
    test.ok(output.isFile() && output.size > 0, 'creates a PNG file');
    test.done();
  }
};
