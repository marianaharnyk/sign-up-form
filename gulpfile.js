'use strict'
const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const ghPages = require('gulp-gh-pages');
const rename = require('gulp-rename');

function styles () {
    return src('app/scss/style.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(concat('style.min.scss'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function scripts (){
    return src(['app/js/jquery-3.7.0.min.js',
        'app/js/jquery.validate/1.19.5/jquery.validate.min.js',
        'app/js/main.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function deploy(){
    return src('dist/**/*')
        .pipe(ghPages());
}

function watching(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    watch(['app/scss/*.scss'], styles);
    watch(['app/js/main.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function building (){
    return src([
        'app/css/style.min.css',
        'app/images/**/*',
        'app/data/**/*',
        'app/js/main.min.js',
        'app/**/*.html'
    ], {base: 'app'})
        .pipe(dest('dist'))
}

function cleanDist (){
    return src('dist')
        .pipe(clean())
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.deploy = deploy;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, watching);