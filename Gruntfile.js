module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            all_src: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/js/sourceMap.map'
                },
                src: 'dist/js/app.js',
                dest: 'dist/js/app.js'
            }
        },
        browserify: {
            options: {
                transform: ['browserify-ngannotate']
            },
            js: {
                // A single entry point for our app
                src: 'app/js/app.js',
                // Compile to a single file to add a script tag for in your HTML
                dest: 'dist/js/app.js',
            },
        },
        copy: {
            all: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                cwd: 'app/',
                src: ['**/*.html', '**/*.css'],
                dest: 'dist/',
            },
        },
    });

    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['browserify', 'copy', 'uglify']);
};