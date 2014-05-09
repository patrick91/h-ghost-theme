'use strict';

module.exports = function(grunt) {

    // Config
    var ghunt = {
        port: '2368'    // Ghost Port #
    };

    grunt.initConfig({

        ghunt: ghunt,

        pkg: grunt.file.readJSON('package.json'),

        // Watch files for changes for livereload and sass
        watch: {
            sass: {
                files: ['assets/sass/*.{scss,sass}'],
                tasks: 'sass:dev'
            },
            scripts: {
                files: ['assets/js/*.js'],
                options:{
                    livereload: true
                }
            },
            html: {
                files: ['*.hbs', 'partials/*.hbs'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['assets/css/*.css']
            }
        },

        // Clean up for new build
        clean: {
            release: ['.tmp', 'release']
        },

        copy: {
            release: {
                files: [
                    {
                        src: 'default.hbs',
                        dest: 'release/default.hbs'
                    },
                    {
                        src: '*.hbs',
                        dest: 'release/'
                    },
                    {
                        src: 'partials/*.hbs',
                        dest: 'release/'
                    }
                ]
            }
        },

        // Compile .scss files
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'assets/sass',
                    src: ['*.scss'],
                    dest: 'assets/css',
                    ext: '.css'
                }]
            },
            release: {
                files: [{
                    expand: true,
                    cwd: 'assets/sass',
                    src: ['*.scss'],
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },


        // Concat & minify assets
        useminPrepare: {
            html: 'default.hbs',
            options: {
                dest: 'release'
            }

        },

        usemin: {
            html: 'release/default.hbs'
        },

        open: {
            dev: {
                path: 'http://127.0.0.1:<%= ghunt.port %>'
            }
        }

    });

    // livereload for development mode
    grunt.registerTask('start', [
        'sass:dev',
        'open:dev',
        'watch'
    ]);

    // Update assets
    grunt.registerTask('update', [
        'sass:dev'
    ]);

    // Build release
    grunt.registerTask('build', [
        'clean',
        'sass:dev',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'copy:release',
        'usemin'
    ]);

    // Same as update
    grunt.registerTask('default', [
        'sass:dev'
    ]);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-usemin');

}