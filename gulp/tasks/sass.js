/*
    All SASS related tasks.
 */
'use strict';

var gulp = require('gulp');
var config = require('../config').sass;

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var gulpif = require('gulp-if');

gulp.task('sass', ['resources_sass'], function () {
    util.log('Compiling SASS, generating sourcemaps, minifying CSS, and autoprefixing vendors.');

    gulp.src(config.paths.build)
        .pipe(gulpif(util.env.development, sourcemaps.init()))
        .pipe(sass(config.settings))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(minify(config.minify))
        .pipe(gulpif(util.env.development, sourcemaps.write('./maps')))
        .pipe(size())
        .pipe(gulp.dest(config.paths.dest));
});
