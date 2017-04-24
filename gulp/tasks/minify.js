var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', ['sass'], function() {
	return gulp.src('build/css/styles.min.css')
		.pipe(cleanCSS({compatibility: 'ie9'}))
		.pipe(gulp.dest('build/css'));
});
