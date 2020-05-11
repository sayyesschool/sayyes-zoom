const gulp = require('gulp');
const sass = require('gulp-sass');

function buildSass() {
    return gulp.src('./scss/index.scss')
        .pipe(sass({
            includePaths: ['./node_modules/'],
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./css/'));
}

gulp.watch('./scss/**/*.scss', buildSass);

module.exports.default = buildSass;