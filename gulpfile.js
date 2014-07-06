var clean = require('gulp-clean');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var path = require('path');
var runSequence = require('run-sequence');

var readme = path.join(__dirname, 'README.md');
var index = path.join(__dirname, 'index.js');
var docs = path.join(__dirname, 'docs');
var documentation = path.join(__dirname, 'docs', '**', '*.*');
var root = path.join(__dirname, '*.js');
var lib = path.join(__dirname, 'lib', '**', '*.js');
var tests = path.join(__dirname, 'test', '**', '*.js');

gulp.task('clean', function() {
  return gulp.src(docs)
    .pipe(clean());
});

gulp.task('docs', ['clean'], function() {
  return gulp.src([readme, index, lib])
    .pipe(jsdoc('./docs'));
});

gulp.task('pages', ['docs'], function() {
  return gulp.src(documentation)
    .pipe(ghPages());
});

gulp.task('lint', function() {
  return gulp.src([root, lib, tests])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('spec', function() {
  return gulp.src(tests)
    .pipe(mocha({
      reporter: 'nyan'
    }));
});

gulp.task('test', function(callback) {
  runSequence('lint', 'spec', callback);
});
