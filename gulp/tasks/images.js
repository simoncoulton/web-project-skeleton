/*
    Minifies image resources.
 */
'use strict';

var gulp = require('gulp');
var config = require('../config').images;

var imagemin = require('gulp-imagemin');
var size = require('gulp-size');
var util = require('gulp-util');
var util = require('gulp-util');

gulp.task('images', ['resources_images'], function () {
    util.log('Minifying images...');
    gulp.src(config.paths.build)
        .pipe(imagemin())
        .pipe(size())
        .pipe(gulp.dest(config.paths.dest));
});
