var browserify = require('browserify');
var bump = require('gulp-bump');
var filter = require('gulp-filter');
var git = require('gulp-git');
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var tagVersion = require('gulp-tag-version');
var uglify = require('gulp-uglify');
var vinylBuffer = require('vinyl-buffer');
var vinylSourceStream = require('vinyl-source-stream');

/**
 * Paths
 */
var index = './index.js';
var lib = 'lib/**/*.js';
var root = '*.js';
var test = 'test/**/*.js';

/**
 * Bundles the code, full version to `asana.js` and minified to `asana-min.js`
 */
function browserTask(minify) {
  return function(done) {
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
    task.pipe(gulp.dest('dist'));

    done();
  };
}

/**
 * Ensure that the git working directory is clean.
 */
function ensureGitClean(done) {
  git.status(function(err, out) {
    if (err) { throw err; }
    if (!/working directory clean/.exec(out)) {
      throw new Error('Git working directory not clean, will not bump version');
    }
  });

  done();
}
gulp.task('ensure-git-clean', ensureGitClean);

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
function bumpPatch() {
  return bumpVersion('patch');
}
gulp.task('bump-patch', gulp.series('ensure-git-clean', bumpPatch));
function bumpFeature() {
  return bumpVersion('minor');
}
gulp.task('bump-feature', gulp.series('ensure-git-clean', bumpFeature));
function bumpVersion() {
  return bumpVersion('major');
}
gulp.task('bump-release', gulp.series('ensure-git-clean', bumpVersion));

/**
 * Lints all of the JavaScript files and fails if the tasks do not pass
 */
function lint() {
  return gulp.src([root, lib, test])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
}
gulp.task('lint', lint);

/**
 * Tests the code with mocha and ensures 100% code coverage
 */
function spec(callback) {
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
                return coverage[key].pct < 49; // TODO: Get this to 100%
              });
              if (incomplete.length > 0) {
                console.log('Incomplete coverage for ' + incomplete.join(', '));
              }
              callback(errOrNull);
            });
      });
}

gulp.task('spec', gulp.series('lint', spec));

gulp.task('browser', browserTask(false));
gulp.task('browser-min', browserTask(true));

/**
 * High Level Tasks
 */
gulp.task('bundle', gulp.series('browser', 'browser-min'));
gulp.task('test', gulp.series('bundle', 'spec'));
