'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		name: 'Personal Sprint',
		root: 'build',
		port: 8080,
		livereload: true
	});
});