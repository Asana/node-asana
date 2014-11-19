var browserify = require('browserify');
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var path = require('path');
var through = require('through');
var vinylSourceStream = require('vinyl-source-stream');
var wicked = require('wicked');

var index = path.join(__dirname, 'index.js');
var root = path.join(__dirname, '*.js');
var lib = path.join(__dirname, 'lib', '**', '*.js');
var tests = path.join(__dirname, 'test', '**', '*.js');

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

gulp.task('docs', function(callback) {
  wicked(null, null, callback);
});

gulp.task('lint', function() {
  return gulp.src([root, lib, tests])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('spec', function(callback) {
  gulp.src(lib)
    .pipe(istanbul({
      includeUntested: true
    }))
    .on('finish', function() {
      gulp.src(tests)
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

gulp.task('test', ['lint', 'spec']);