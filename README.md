# grunt-nomnoml

[![Latest version](https://img.shields.io/npm/v/grunt-nomnoml)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/grunt-nomnoml)
](https://www.npmjs.com/package/grunt-nomnoml)
[![codecov](https://codecov.io/gh/prantlf/grunt-nomnoml/branch/master/graph/badge.svg)](https://codecov.io/gh/prantlf/grunt-nomnoml)
[![Code Climate](https://codeclimate.com/github/prantlf/grunt-nomnoml/badges/gpa.svg)](https://codeclimate.com/github/prantlf/grunt-nomnoml)

This module provides a grunt multi-task generating images from [nomnoml]
diagram sources.
    
If you generate HTML technical documention from textual sources, you may want
to maintain only sources of UML diagrams in your repository and generate the
pictures only during the documentation build.  You will be able to do changes
easily, without committing both diagram sources and pictures and sychronizing
them manually.

If you want to just quickly convert a nomnoml source file to a picture, you
can use the [nomnoml-cli] command-line tool, which this task is based on.

## Installation

You need [node >= 12][node], [npm] and [grunt >= 0.4][Grunt] installed
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
    one: {
      files: {
        'dist/doc/images/diagram.png': ['doc/images/diagram.nomnoml']
      }
    },
    all: {
      options: { format: 'svg' },
      src: ['doc/images/*.nomnoml']
      dest: 'dist/doc/images'
    }
  }
});
```

The configuration consists of key-value pairs with the output image path
as a key pointing to the nomnoml input file.  If you specify more source
files by wildcards, the destination should be a directory; the source file
extension will be replaced by "png" or other one depending on the format
in the output file name.

The `options` can contain one or more options supported by the [nomnoml-cli API].
For example, `format` can be `png` (default), `jpg`, `svg` or `pdf`.

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

## License

Copyright (c) 2015-2022 Ferdinand Prantl

Licensed under the MIT license.

[node]: http://nodejs.org
[npm]: http://npmjs.org
[package.json]: https://docs.npmjs.com/files/package.json
[Grunt]: https://gruntjs.com
[Gruntfile]: http://gruntjs.com/sample-gruntfile
[Getting Gtarted]: https://github.com/gruntjs/grunt/wiki/Getting-started
[nomnoml]: http://www.nomnoml.com/
[nomnoml-cli]: https://github.com/prantlf/nomnoml-cli
[nomnoml-cli API]: https://github.com/prantlf/nomnoml-cli#programmatic-usage
