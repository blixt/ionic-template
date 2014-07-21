#!/usr/bin/env node

/**
 * This hook will run the image resize jobs specified by the ionic.resize entry
 * in package.json.
 *
 * This will not work if ImageMagick is not installed on the system.
 */

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var util = require('util');

var root = process.argv[2];

var pkg = require(path.join(root, 'package.json'));
if (!pkg.ionic || !pkg.ionic.resize) {
  console.log('[resize hook] Not running without ionic.resize map in package.json');
  process.exit(0);
}

Object.keys(pkg.ionic.resize).forEach(function (formatName) {
  var format = pkg.ionic.resize[formatName];
  var source = path.join(root, format.source);

  var targetBasePath = path.join(root, format.targetBasePath);
  if (!fs.existsSync(targetBasePath)) {
    return;
  }

  Object.keys(format.sizes).forEach(function (size) {
    var targets = format.sizes[size];
    if (!Array.isArray(targets)) targets = [targets];

    targets.forEach(function (target) {
      var targetPath = path.join(targetBasePath, target);
      console.log('[resize hook] Creating %s %s', size, formatName);
      exec(util.format('convert "%s" -resize %s "%s"', source, size, targetPath), function (error) {
        if (error) {
          console.log('[resize hook] Failed to create %s %s (%s)', size, formatName, error);
        }
      });
    });
  });
});
