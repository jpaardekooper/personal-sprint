'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch', function () {
	gulp.watch(['app/*.html'], ['html', 'clean']);
	gulp.watch('app/resources/assets/sass/**/*.scss', ['sass', 'cssmin', 'minify-css']);
	gulp.watch('app/resources/assets/js/*.js', ['compress']);
});

gulp.task('html', function () {
	gulp.src('build/*.html')
		.pipe(connect.reload());
});