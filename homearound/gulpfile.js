var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
var minify = require('gulp-minify');


gulp.task('minify', function() {
  return gulp.src('./_site/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site'))
});


gulp.task('optimise', () =>
    gulp.src('./_site/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./_site/img'))
);


gulp.task('compress', function() {
  gulp.src('./_site/js/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.js'
        },
        ignoreFiles: ['min.js']
    }))
    .pipe(gulp.dest('./_site/js'))
});