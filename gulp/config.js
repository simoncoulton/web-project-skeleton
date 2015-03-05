/*
    Configuration options for the gulp tasks
 */
'use strict';

var src = './source';
var web = src + '/public';
var assets = src + '/static';
var build = './build';

var config = {
    paths: {
        src: src,
        web: web,
        assets: assets,
        build: build
    },
    js: {
        paths: {
            app: src + '/**/static/js/**/*.js',
            build: build + '/js/**/*.js', 
            src: assets + '/js/**/*.js',
            dest: web + '/js'
        },
        lint: {
            settings: {},
            reporter: {
                filename: build + '/jshint-output.log'
            }
        }
    },
    sass: {
        paths: {
            app: src + '/**/static/sass/**/*.scss',
            build: build + '/sass/**/*.scss',
            src: assets + '/sass/**/*.scss',
            dest: web + '/css'
        },
        lint: {
            reporterOutput: build + '/sass_report.xml'
        },
        settings: {},
        autoprefixer: {
            browsers: ['last 2 version']
        },
        minify: {
            keepBreaks: true
        }
    },
    css: [web + '/css/*.css', src + '/app/**/*.html'],
    images: {
        paths: {
            app: src + '/**/static/img/**/*.*',
            build: build + '/img/**/*.*',
            src: assets + '/img/**/*.*',
            dest: web + '/img'
        }
    }
};

module.exports = config;
