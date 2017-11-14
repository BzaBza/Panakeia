var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('app/style/*/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/style/css'))
});
gulp.task('watch', function () {
    watch('app/style/sass/**.sass', function (a, b) {
        gulp.run('sass');
    });
});