var gulp = require('gulp');
var path = require('path');

var distDir = path.join(__dirname, 'dist');

gulp.task('default', ['server']);
gulp.task('server', ['asana-js', 'public-files']);

gulp.task('asana-js', function() {
  gulp.src('./node_modules/asana/dist/asana.js').pipe(gulp.dest(distDir));
});

gulp.task('public-files', function() {
  gulp.src(path.join(__dirname, 'public/**')).pipe(gulp.dest(distDir));
});