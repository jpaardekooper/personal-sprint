'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
	return gulp.src('app/resources/assets/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/resources/assets/css'))
		.pipe(connect.reload());
});
