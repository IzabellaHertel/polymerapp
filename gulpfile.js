var gulp = require('gulp'),
    vulcanize = require('gulp-vulcanize'),
    jshint = require('gulp-jshint');

gulp.task('vulcanize', function () {
    return gulp.src('index.html')
        .pipe(vulcanize({
             stripComments: true,
             inlineScripts: true,
             inlineCss: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('*.html', ['vulcanize']);
});

gulp.task('jshint', function() {
return gulp.src('*.html')
    .pipe(jshint.extract('always'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['vulcanize', 'watch']);
