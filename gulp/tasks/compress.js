'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('compress', function () {
	gulp.src('app/resources/assets/js/*.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build/javascript/'))
		.pipe(connect.reload());
});