'use strict';

var gulp = require('gulp');

gulp.task('build', ['clean', 'lint', 'sass', 'js', 'images']);
