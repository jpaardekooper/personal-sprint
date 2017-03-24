module.exports = {
	first: ['newer:concat'],
	second: ['newer:uglify', 'newer:imagemin', 'newer:watch', 'newer:connect', 'newer:jshint']
};