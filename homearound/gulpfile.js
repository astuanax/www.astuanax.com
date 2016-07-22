var gulp = require('gulp'), 
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-minify')
    webshot=require('gulp-webshot');
 

gulp.task('minify', function() {
  return gulp.src('./_site/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site'))
});


gulp.task('optimise', () =>
    gulp.src('./_site/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./_site/img'))
);


gulp.task('compress', function() {
 return gulp.src('./_site/js/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.js'
        },
        ignoreFiles: ['min.js']
    }))
    .pipe(gulp.dest('./_site/js'))
});


gulp.task('webshot', function() {
  return gulp.src('_site/*.html')
        .pipe(webshot({ dest:'shots/',root:'Theme'}));
})


gulp.task('copy', ['minify', 'compress', 'optimise'],  function() {
   return gulp.src('./_site/**')
   .pipe(gulp.dest('/Volumes/BigOne/github/astuanax.github.io/homearound'));
});


gulp.task('copyonly',  function() {
   return gulp.src('./_site/**')
   .pipe(gulp.dest('/Volumes/BigOne/github/astuanax.github.io/homearound'));
});



gulp.task('build', ['copy']);