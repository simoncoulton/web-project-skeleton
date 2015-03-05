/*
    Collects static assets from the project.
 */
'use strict';

var gulp = require('gulp');
var config = require('../config');

var rename = require('gulp-rename');
var symlink = require('gulp-sym');
var path = require('path');
var util = require('gulp-util');

function resources(name, paths) {
    util.log('Symlinking all ' + name + ' assets to ' + config.paths.build);

    gulp.src([paths.src, paths.app])
        .pipe(symlink(function (file) {
            var p = file.relative.split(path.sep);
            // This feels a little hacky based on project structure
            var staticIndex = p.indexOf('static');
            if (staticIndex > 0) {
                var parts = staticIndex - 1 !== 0 ? [p[staticIndex - 1]] : [];
                p = parts.concat(p.slice(staticIndex + 2));
            }
            p.unshift(name);
            p.unshift(config.paths.build);

            return p.join(path.sep);
        }, {force: true}));
}

gulp.task('resources_js', function() {
    resources('js', config.js.paths);
});

gulp.task('resources_sass', function() {
    resources('sass', config.sass.paths);
});

gulp.task('resources_images', function() {
    resources('img', config.images.paths);
});

gulp.task(
    'resources', 
    [
        'resources_js', 
        'resources_sass', 
        'resources_images'
    ]
);
