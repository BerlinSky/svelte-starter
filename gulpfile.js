var gulp = require('gulp');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();

gulp.task('rollup', function() {
  return rollup('rollup.config.js')
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('rollup-watch', ['rollup'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('default', ['rollup'], function() {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
    open: false
  });

  gulp.watch(["src/**", 'public/index.html'], ['rollup-watch']);
});
