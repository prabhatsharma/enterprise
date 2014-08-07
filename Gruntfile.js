module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                configFile: "protractor.conf.js"
            },
            run: {}
        },
        jshint: {
            files: {
              src: ['scripts/*/*.js','scripts/*.js']
            },
          }
    });
 
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner')
    
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('test',['karma','protractor']);
    grunt.registerTask('lint',['jshint']);
};