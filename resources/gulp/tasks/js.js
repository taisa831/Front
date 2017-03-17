var gulp = require('gulp');
var babel = require('gulp-babel');
var config = require('../config.js');

gulp.task('runBabel', function(){
    gulp.src(config.es6.src)
        .pipe(babel())
        .pipe(gulp.dest(config.es6.dest));
});
