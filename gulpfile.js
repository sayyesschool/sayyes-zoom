const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

const config = require('./src/config');
const data = require('./src/data');
const functions = require('./src/functions');

function buildScss(env) {
    return () => gulp.src('./src/index.scss')
        .pipe(sass({
            includePaths: ['./node_modules/'],
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./public/'));
}

function buildPug(env) {
    return () => gulp.src('./src/index.pug')
        .pipe(pug({
            locals: {
                ENV: env,
                data,
                ...config,
                ...functions
            }
        }))
        .pipe(gulp.dest('./public/'));
}

module.exports.build = gulp.parallel(buildScss('prod'), buildPug('prod'));

module.exports.default = () => gulp.watch(['./src/**/*'], gulp.parallel(buildScss('dev'), buildPug('dev')));