var coveralls = require('gulp-coveralls');
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var path = require('path');
var runSequence = require('run-sequence');
var wicked = require('wicked');

var readme = path.join(__dirname, 'README.md');
var index = path.join(__dirname, 'index.js');
var docs = path.join(__dirname, 'docs');
var documentation = path.join(__dirname, 'docs', '**', '*.*');
var root = path.join(__dirname, '*.js');
var lib = path.join(__dirname, 'lib', '**', '*.js');
var tests = path.join(__dirname, 'test', '**', '*.js');
var lcov = path.join(__dirname, 'coverage', 'lcov.info');

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
        .pipe(mocha({
          reporter: 'nyan'
        }))
        .pipe(istanbul.writeReports({
          reporters: ['lcovonly']
        }))
        .on('end', callback);
    });
});

gulp.task('coverage', function() {
  gulp.src(lcov)
    .pipe(coveralls());
});

gulp.task('test', function(callback) {
  runSequence('lint', 'spec', 'coverage', callback);
});