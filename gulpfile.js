var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var path = require('path');
var wicked = require('wicked');

var index = path.join(__dirname, 'index.js');
var root = path.join(__dirname, '*.js');
var lib = path.join(__dirname, 'lib', '**', '*.js');
var tests = path.join(__dirname, 'test', '**', '*.js');

gulp.task('docs', function(callback) {
  wicked(null, null, callback);
});

gulp.task('lint', function() {
  return gulp.src([root, lib, tests])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('spec', function(callback) {
  gulp.src([lib, index])
    .pipe(istanbul())
    .on('finish', function() {
      gulp.src(tests)
        .pipe(mocha())
        .pipe(istanbul.writeReports({
          reporters: ['lcovonly']
        }))
        .on('end', callback);
    });
});

gulp.task('test', ['lint', 'spec']);