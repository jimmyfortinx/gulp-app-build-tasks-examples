var gulp = require('gulp');
var gulpAppBuildTasks = require('gulp-app-build-tasks');

// Userful only because for testing we are using npm link,
// otherwise you can remove it
var config = {
    projectDirectory: __dirname
};

gulpAppBuildTasks.apply(config, gulp);