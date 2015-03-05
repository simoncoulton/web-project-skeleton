'use strict';

var gulp = require('gulp');
var config = require('../config').css;

var checkcss = require('gulp-check-unused-css');
var util = require('gulp-util');

gulp.task('css', function () {
    util.log('Checking for unused CSS from application templates.');

    gulp.src(config)
        .pipe(checkcss());
});
