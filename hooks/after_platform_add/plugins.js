#!/usr/bin/env node

/**
 * This hook will re-add all Cordova plugins. The reason you'd want to use this
 * hook is because plugins tend to get broken when adding platforms or changing
 * stuff around, so it's generally a good idea to reset them after.
 */

var exec = require('child_process').exec;
var path = require('path');

var pkg = require(path.join(process.argv[2], 'package.json'));
if (!pkg.ionic || !pkg.ionic.plugins) {
  console.log('[plugins hook] Not running without ionic.plugins array in package.json');
  process.exit(0);
}

var pluginsToRemove;
exec('cordova plugin list', function (error, stdout, stderr) {
  if (error) return;

  // Parse the plugin list for existing plugins.
  pluginsToRemove = stdout.toString().trim().split(/[\r\n]+/g).map(function (line) {
    return line.split(' ')[0];
  });

  // Special case message saying there are no plugins.
  if (pluginsToRemove[0] == 'No') {
    pluginsToRemove = [];
  }

  // Begin removing existing plugins.
  removePlugin();
});

function removePlugin() {
  if (!pluginsToRemove.length) {
    addPlugin();
    return;
  }

  var name = pluginsToRemove.pop();
  console.log('[plugins hook] Removing plugin ' + name);
  exec('cordova plugin remove ' + name, removePlugin);
}

var pluginsToAdd = pkg.ionic.plugins.slice();
function addPlugin() {
  if (!pluginsToAdd.length) return;

  var source = pluginsToAdd.pop();
  console.log('[plugins hook] Adding plugin ' + source);
  exec('cordova plugin add ' + source, addPlugin);
}
