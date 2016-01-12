var gulp = require('gulp');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');

gulp.task('inject', function () {
    var target = gulp.src('index.html');

    var libSources = gulp.src(['libs/jquery/jquery-1.11.2.min.js',
       'libs/angular/angular.min.js',
       'libs/angular/angular-route.min.js',
       'js/*',
       'js/services/*',
       'js/controllers/angular/*',
       'libs/bootstrap/js/*',
       'js/controllers/**/*'], {read: false});

    return target.pipe(inject(libSources, {addRootSlash: true}))
        .pipe(gulp.dest(''));
});


gulp.task('dev', function() {
  runSequence('inject');
});
