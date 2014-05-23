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
                files: 'assets/sass/**/*.{scss,sass}',
                tasks: ['sass', 'autoprefixer']
            },
            scripts: {
                files: 'assets/js/*.js',
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
                files: 'assets/css/*.css'
            }
        },

        // Clean up for new build
        clean: {
            release: ['.tmp', 'release']
        },

        // Move files over for production release
        copy: {
            release: {
                files: [
                    {
                        src: 'package.json',
                        dest: 'release/package.json'
                    },
                    {
                        src: '*.hbs',
                        dest: 'release/'
                    },
                    {
                        src: 'partials/*.hbs',
                        dest: 'release/'
                    },
                    {
                        src: ['assets/**/*', '!assets/css/**/*', '!assets/js/**/*', '!assets/sass/**/*'],
                        dest: 'release/'
                    }
                ]
            }
        },

        // Compile .scss files
        sass: {
            release: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/sass',
                        src: '*.scss',
                        dest: '.tmp/assets/css',
                        ext: '.css'
                    }
                ]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: 'last 2 versions'
            },
            release: {
                files: [{
                    expand: true,
                    cwd: '.tmp/assets/css',
                    src: '{,*/}*.css',
                    dest: 'assets/css'
                }]
            }
        },

        // Rename files for browser caching purposes
        rev: {
            release: {
                files: {
                    src: [
                        'release/assets/css/vendor.css',
                        'release/assets/images/background/*.{gif,jpeg,jpg,png,svg}',
                        'release/assets/fonts/{,*/}*.*',
                        'release/assets/js/{,*/}*.js'
                    ]
                }
            }
        },

        // The following *-min tasks produce minified files in the release folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: 'release/assets/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: '{,*/}*.svg',
                    dest: 'release/assets/images'
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
            html: 'release/default.hbs',
            css: ['release/assets/css/{,*/}*.css']
        },

        concurrent: {
            release: [
                'clean:release',
                'sass',
                'imagemin',
                'svgmin'
            ]
        },

        // Open ghost page for development
        open: {
            dev: {
                path: 'http://127.0.0.1:<%= ghunt.port %>'
            }
        }

    });

    // livereload for development mode
    grunt.registerTask('start', [
        'sass',
        'autoprefixer',
        'open',
        'watch'
    ]);

    // Update assets
    grunt.registerTask('update', [
        'sass',
        'autoprefixer'
    ]);

    // Build release
    grunt.registerTask('build', [
        'concurrent:release',
        'autoprefixer',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'copy:release',
        'rev',
        'usemin'
    ]);

    // Same as update
    grunt.registerTask('default', [
        'sass',
        'autoprefixer'
    ]);

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-usemin');

}