#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var root = process.argv[2];

var pluginsPath = path.join(root, 'plugins');

if (!fs.existsSync(pluginsPath)) {
  fs.mkdirSync(pluginsPath);
}
