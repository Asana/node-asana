var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var path = require('path');
var runSequence = require('run-sequence');

var root = path.join(__dirname, '*.js');
var lib = path.join(__dirname, 'lib', '**', '*.js');
var tests = path.join(__dirname, 'test', '**', '*.js');

gulp.task('lint', function() {
  return gulp.src([root, lib, tests])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('spec', function() {
  return gulp.src(tests)
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('test', function(callback) {
  runSequence('lint', 'spec', callback);
});
