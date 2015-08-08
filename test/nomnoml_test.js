'use strict';

var fs = require('fs'),
    path = require('path');

exports.nomnoml = {

  task: function (test) {
    var output = fs.statSync(path.join(__dirname, 'piracy.png'));
    test.ok(output.isFile() && output.size > 0, 'creates a PNG file');
    test.done();
  }

};
