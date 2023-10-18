const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilaSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/css'))
}

exports.default = compilaSass