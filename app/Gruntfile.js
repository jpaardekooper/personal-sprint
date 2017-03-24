'use strict';

module.exports = function(grunt) {
    require('load-grunt-config')(grunt);
    grunt.registerTask('default', ['sass','connect','watch'])
};