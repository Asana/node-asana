var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var path = require('path');
var wicked = require('wicked');
var vinylSourceStream = require('vinyl-source-stream');
var through = require('through');
var glob = require('glob');

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

var replace = function(regex, replacement) {
  return function() {
    var data = '';
    function write(buf) {
      data += buf;
    }
    function end() {
      this.queue(data.replace(regex, replacement));
      this.queue(null);
    }
    return through(write, end);
  };
};

gulp.task('browser', function() {
  return browserify({
        entries: [index],
        standalone: 'asana'
      })
      .transform(
          replace(/require\('request'\)/g, 'require(\'browser-request\')'))
      .bundle()
      .pipe(vinylSourceStream('asana.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('test', ['lint', 'spec']);