var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./resources/gulp/tasks/', {recurse: true});

gulp.task('default', ['watch'], function(){
    console.log('run gulp!');
});
