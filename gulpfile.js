var browserify = require('browserify');
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var vinylBuffer = require('vinyl-buffer');
var vinylSourceStream = require('vinyl-source-stream');

//xcxc
var git = require('gulp-git');
var bump = require('gulp-bump');
var filter = require('gulp-filter');
var tagVersion = require('gulp-tag-version');

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
gulp.task('bundle', ['browser', 'browser-min']);

/**
 * Bundles the code, full version to `asana.js` and minified to `asana-min.js`
 */
function browserTask(minify) {
  return function() {
    var task = browserify(
        {
          entries: [index],
          standalone: 'Asana'
        })
        .bundle()
        .pipe(vinylSourceStream('asana' + (minify ? '-min' : '') + '.js'));
    if (minify) {
      task = task
          .pipe(vinylBuffer())
          .pipe(uglify());
    }
    return task.pipe(gulp.dest('dist'));
  };
}
gulp.task('browser', browserTask(false));
gulp.task('browser-min', browserTask(true));

/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp bump-patch     # makes v0.1.0 → v0.1.1
 *     gulp bump-feature   # makes v0.1.1 → v0.2.0
 *     gulp bump-release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */
function bumpVersion(importance) {
  return gulp.src(['./package.json', './bower.json'])
      .pipe(bump({type: importance}))
      .pipe(gulp.dest('./'))
      .pipe(git.commit('bump package version'))
      .pipe(filter('package.json'))
      .pipe(tagVersion());
}
gulp.task('bump-patch', function() { return bumpVersion('patch'); });
gulp.task('bump-feature', function() { return bumpVersion('minor'); });
gulp.task('bump-release', function() { return bumpVersion('major'); });

/**
 * Publishes to bower
 */
gulp.task('publish-bower', function() {
  gulp.src(['./package.json', './bower.json'])
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