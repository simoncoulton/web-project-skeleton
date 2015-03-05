'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function () {
    gulp.watch([config.js.paths.src, config.js.paths.app], ['lint_js', 'js']);
    gulp.watch([config.sass.paths.src, config.sass.paths.app], ['lint_sass', 'sass']);
    gulp.watch([config.images.paths.src, config.images.paths.app], ['images']);
});
