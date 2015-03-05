/*
    Cleans the build directory of scrap.
 */
'use strict';

var gulp = require('gulp');
var config = require('../config').paths;

var del = require('del');
var util = require('gulp-util');

gulp.task('clean', function (cb) {
    util.log('Cleaning the build directory.');

    del([
        config.build + '/**',
        '!' + config.build
    ], cb);
});
