var browserify = require('browserify');
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var vinylSourceStream = require('vinyl-source-stream');

/**
 * Paths
 */
var index = './index.js';
var lib = 'lib/**/*.js';
var root = '*.js';
var test = 'test/**/*.js';

/**
 * High Level Tasks
 */
gulp.task('test', ['bundle', 'spec']);

/**
 * Bundles the code
 */
gulp.task('bundle', function() {
  return browserify({
    entries: [index],
    standalone: 'Asana'
  }).bundle()
    .pipe(vinylSourceStream('asana.js'))
    .pipe(gulp.dest('dist'));
});

/**
 * Lints all of the JavaScript files and fails if the tasks do not pass
 */
gulp.task('lint', function() {
  return gulp.src([root, lib, test])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

/**
 * Tests the code with mocha and ensures 100% code coverage
 */
gulp.task('spec', ['lint'], function(callback) {
  gulp.src(lib)
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', function() {
      gulp.src(test)
        .pipe(mocha({
          reporter: process.env.TRAVIS ? 'spec' : 'nyan'
        }))
        .pipe(istanbul.writeReports({
          reporters: ['text', 'text-summary']
        }))
        .on('end', function() {
          var errOrNull = null;
          var coverage = istanbul.summarizeCoverage();
          var incomplete = Object.keys(coverage).filter(function(key) {
            return coverage[key].pct !== 100;
          });
          if (incomplete.length > 0) {
            errOrNull = new Error(
              'Incomplete coverage for ' + incomplete.join(', '));
          }
          callback(errOrNull);
        });
    });
});