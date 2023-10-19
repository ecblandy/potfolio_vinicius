const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./public/css'))
}

function compilaJavascript(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./public/script'))
}

function compilaImg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/img'))
}



exports.default = gulp.parallel(compilaJavascript, compilaSass, compilaImg)
exports.watch = ()=>{
    gulp.watch('./src/scripts/*.js', gulp.parallel(compilaJavascript)) 
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaSass))
}