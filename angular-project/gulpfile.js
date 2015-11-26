var gulp = require('gulp');

var options = {
    angular: {
        module: 'powerfulApp'
    }
};

require('gulp-app-build-tasks')(options, gulp)