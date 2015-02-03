'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/**/*.js']
        },

        requirejs: {
            script: {
                options: {
                    baseUrl: './',
                    name: 'demo',
                    out: 'dist/demo.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('demo', 'requirejs');
    grunt.registerTask('default', ['jshint']);

};
