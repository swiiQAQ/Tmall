var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
//定义一个sass任务（自定义任务名称）

gulp.task('sass', function () {

    return watch('./_source/sass/*.scss')

        .pipe(sass())

        .pipe(gulp.dest('./css'))

})

gulp.task('default', ['sass']);