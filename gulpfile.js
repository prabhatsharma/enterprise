var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var protractor = require("gulp-protractor").protractor;

gulp.task('jshint', function() {
  gulp.src(['./scripts/*/*.js','scripts/*.js','test/*/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

/*files= ['bower_components/angular/angular.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'scripts/*.js',
            'scripts/controllers/*.js','scripts/services/*.js',
            'test/unit/*.js'
    ];*/

gulp.task('karma', function() {
  // Be sure to return the stream
  return gulp.src('nonexistingfile')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('protractor', function() {
    gulp.src(["./test/*.js"])
        .pipe(protractor({
            configFile: "protractor.conf.js",
            args: ['--baseUrl', 'http://127.0.0.1:8080']
        })) 
        .on('error', function(e) { throw e })
});