/*
    All JavaScript related tasks.
 */
'use strict';

var gulp = require('gulp');
var config = require('../config').js;

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var gulpif = require('gulp-if');

gulp.task('js', ['resources_js'], function () {
    util.log('Concatenating JS and generating sourcemaps.');
    
    gulp.src(config.paths.build)
        .pipe(gulpif(util.env.development, sourcemaps.init()))
        .pipe(concat('all.js'))
        .pipe(gulp.dest(config.paths.dest))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulpif(util.env.development, sourcemaps.write('./maps')))
        .pipe(size())
        .pipe(gulp.dest(config.paths.dest));
});
