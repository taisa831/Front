var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config.js');

gulp.task('watch', function () {
    watch(config.es6.src, function () {
        gulp.start(['runBabel'])
    });
});
