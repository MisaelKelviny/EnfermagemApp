var minifyHtml    = require('gulp-minify-html'),
    templateCache = require('gulp-angular-templatecache');

gulp.task('cache_templates', function() {
  gulp.src('www/templates/**/*.html')
    .pipe(minifyHtml({empty: true}))
    .pipe(templateCache({
      standalone: true,
      root: 'templates'
    }))
    .pipe(gulp.dest('www/js'));
})