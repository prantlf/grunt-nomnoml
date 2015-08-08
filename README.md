# grunt-nomnoml [![NPM version](https://badge.fury.io/js/grunt-nomnoml.png)](http://badge.fury.io/js/grunt-nomnoml) [![Build Status](https://travis-ci.org/prantlf/grunt-nomnoml.png)](https://travis-ci.org/prantlf/grunt-nomnoml) [![Coverage Status](https://coveralls.io/repos/prantlf/grunt-nomnoml/badge.svg)](https://coveralls.io/r/prantlf/grunt-nomnoml) [![Dependency Status](https://david-dm.org/prantlf/grunt-nomnoml.svg)](https://david-dm.org/prantlf/grunt-nomnoml) [![devDependency Status](https://david-dm.org/prantlf/grunt-nomnoml/dev-status.svg)](https://david-dm.org/prantlf/grunt-nomnoml#info=devDependencies) [![devDependency Status](https://david-dm.org/prantlf/grunt-nomnoml/peer-status.svg)](https://david-dm.org/prantlf/grunt-nomnoml#info=peerDependencies) [![Code Climate](https://codeclimate.com/github/prantlf/grunt-nomnoml/badges/gpa.svg)](https://codeclimate.com/github/prantlf/grunt-nomnoml) [![Codacy Badge](https://www.codacy.com/project/badge/f3896e8dfa5342b8add12d50390edfcd)](https://www.codacy.com/public/prantlf/grunt-nomnoml) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM Downloads](https://nodei.co/npm/grunt-nomnoml.png?downloads=true&stars=true)](https://www.npmjs.com/package/grunt-nomnoml)

This module provides a grunt multi-task generating images from [nomnoml]
diagram sources.
    
If you generate HTML technical documention from textual sources, you may want
to maintain only sources of UML diagrams in your repository and generate the
pictures only during the documentation build.  You will be able to do changes
easily, without committing both diagram sources and pictures and sychronizing
them manually.

## Installation

You need [node >= 0.12][node], [npm] and [grunt >= 0.4][Grunt] installed
and your project build managed by a [Gruntfile] with the necessary modules
listed in [package.json].  If you haven't used Grunt before, be sure to
check out the [Getting Started] guide, as it explains how to create a
Gruntfile as well as install and use Grunt plugins.  Once you're familiar
with that process, you may ensure native dependencies of this plugin and
install it:

1. Install [pre-requisites](https://github.com/Automattic/node-canvas/wiki/_pages)
   of the [node-canvas](https://github.com/Automattic/node-canvas) module depending
   on your operating system

2. Install the Grunt task:

```shell
$ npm install grunt-nomnoml --save-dev
```

## Configuration

Add the `nomnoml` entry with the nomnoml task configuration to the
options of the `grunt.initConfig` method:

```js
grunt.initConfig({
  nomnoml: {
    all: {
      files: {
        'dist/doc/images/diagram.png': ['doc/images/diagram.nomnoml']
      }
    }
  }
});
```
The configuration consists of key-value pairs with the output image path
as a key pointing to the nomnoml input file.

Then, load the plugin:

```javascript
grunt.loadNpmTasks('grunt-nomnoml');
```

## Build

Call the `nomnoml` task:

```shell
$ grunt nomnoml
```

or integrate it to your build sequence in `Gruntfile.js`:

```js
grunt.registerTask('default', ['nomnoml', ...]);
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding
style.  Add unit tests for any new or changed functionality. Lint and test
your code using Grunt.

## Release History

 * 2015-08-08   v0.1.0   Initial release

## License

Copyright (c) 2015 Ferdinand Prantl

Licensed under the MIT license.

[node]: http://nodejs.org
[npm]: http://npmjs.org
[package.json]: https://docs.npmjs.com/files/package.json
[Grunt]: https://gruntjs.com
[Gruntfile]: http://gruntjs.com/sample-gruntfile
[Getting Gtarted]: https://github.com/gruntjs/grunt/wiki/Getting-started
[nomnoml]: http://www.nomnoml.com/
