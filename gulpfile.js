var gulp = require('gulp'),
		nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');

gulp.task('start', function () {
  nodemon({
    script: 'index.js'
  })
});

gulp.task('css', function() {
  gulp.src('public/style.css')
  .pipe(livereload());
});

gulp.task('html', function() {
    gulp.src('public/index.html')
    .pipe(livereload());
});
 
gulp.task('watch', function() {
	livereload.listen();

  gulp.watch('public/style.css', ['css']);
  gulp.watch('public/index.html', ['html']);
});

gulp.task('default', ['start', 'css', 'html', 'watch']);