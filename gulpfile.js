var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('app/style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/style'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './app'
        },
        port:8080,
        notify: false
    })
});
gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch(['app/js/*.js','app/index.html']).on('change', browserSync.reload);
    gulp.watch('app/style/*.scss', ['sass'])
});
gulp.task('default', ['watch']);