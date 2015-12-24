var gulp = require('gulp');
var config = require('./config');
var gulpAppBuildTasks = require('gulp-app-build-tasks');

gulpAppBuildTasks.use(gulp);
gulpAppBuildTasks.configure(config);
gulpAppBuildTasks.registerTasks();