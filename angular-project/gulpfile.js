var gulp = require('gulp');
var path = require('path');
var nodeModulesPath = path.join(__dirname, 'node_modules');

require('gulp-app-build-tasks')(nodeModulesPath, gulp)