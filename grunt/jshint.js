module.exports = {
	jshint: {
		options: {
			reporter: require('jshint-stylish')
		},
		all: ['../Grunfile.js', 'src/**/*.js']
	},
};
