/*
    All lint related tasks.
 */
'use strict';

var gulp = require('gulp');
var config = require('../config');

var jshint = require('gulp-jshint');
var scsslint = require('gulp-scss-lint');
var util = require('gulp-util');

gulp.task('lint_js', function () {
    util.log('Linting JS...');
    gulp.src(config.js.paths.src)
        .pipe(jshint(config.js.lint.settings))
        .pipe(jshint.reporter('gulp-jshint-file-reporter', config.js.lint.reporter));
});

gulp.task('lint_sass', function () {
    util.log('Linting SASS...');
    gulp.src(config.sass.paths.src)
        .pipe(scsslint(config.sass.lint));
});

gulp.task('lint', ['lint_js', 'lint_sass']);
