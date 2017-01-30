//************************
// Created by Olixem
// (c) 2016
// github.com/olixem
//************************

//************************
// Configuration

//FTP Config - what files to load
var config = {
    ftp: {
        localFilesGlob: ['dist/**','!**/*.DS_Store']  
    }
};

//Loads and fetches configuration for ftp
config.ftp.keys = require('./ftp_keys.json');

//************************
// Gulp init & file loading

var gulp = require('gulp');
var plug = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*','vinyl-*'],});
plug.fs = require('fs');

// I require runSequence manually, because it'll be depreceated with the release of Gulp 4.0.0
// Shall rewrite this after the relesease of Gulp 4.0.0
var runSequence = require('run-sequence');

//************************
//      Main tasks

gulp.task('dev', function() {
    setEnv("dev");

    //VERY NOT DRY, SHALL BE REFACTORED
    runSequence(
        ['clean-dev'],
        ['scripts','img','styles','markup', 'misc','fonts','svg','bower-sync']
        );

    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/markup/**/*.pug', ['markup']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/misc/*.*', {dot: true}, ['misc']);
    gulp.watch('src/fonts/**/*', ['fonts']);
    gulp.watch(['src/img/**/*','!src/img/**/*.svg'], ['img']);
    return gulp.watch('src/img/**/*.svg', ['svg']);

});


gulp.task('build',function(){
    setEnv("dist");

    //VERY NOT DRY, SHALL BE REFACTORED
    runSequence(
        ['clean-dist'],
        ['scripts','img','styles', 'misc','fonts','svg'],
        ['markup']
    );
});

gulp.task('default', function(){
    //VERY NOT DRY, SHALL BE REFACTORED
    setEnv("dist");

    runSequence(
        ['clean-dist'],
        ['scripts','img','styles', 'misc','fonts','svg'],
        ['markup'],
        ['deploy']
        );
});

//************************
//  Subtasks

gulp.task('scripts', getTask('scripts'));
gulp.task('misc', getTask('misc'));
gulp.task('markup', getTask('markup'));
gulp.task('styles', getTask('styles'));
gulp.task('fonts', getTask('fonts'));
gulp.task('img', getTask('img'));
gulp.task('svg', getTask('svg'));
gulp.task('bower-sync', getTask('bower-sync'));
gulp.task('deploy', getTask('deploy'));

//************************
//  Helper tasks

gulp.task('list', function(){
    console.log(plug);
});

gulp.task('env', function(){
    var test = dev() ? "Development" : "Distribution";
    console.log(test);
});

//Helper task to delete the build folder before build
//NOT DRY SHALL BE REFACTORED IN THE FUTURE
gulp.task('clean-dist', function(){
    return gulp.src('dist', {read: false})
    .pipe(plug.clean())
    ;
});

gulp.task('clean-dev', function(){
    return gulp.src('dev/', {read: false})
    .pipe(plug.clean())
    ;
});

//************************
//  Helper stuff

function getTask(task) {
    return require('./gulp/' + task)
    (gulp,
    plug,
    plug.environments.development,
    plug.environments.production,
    config);
}

// Setting environments to own variables
var dev = plug.environments.development;
var dist = plug.environments.production;

// Allong with helper function to set envs
function setEnv(env){
    if (env === "dev"){
        plug.environments.current(dev);
    } else if (env === "dist"){
        plug.environments.current(dist);
    }
}
