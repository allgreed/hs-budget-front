var gulp = require('gulp');
var plugins = require('gulp-load-plugins')( {pattern: ['gulp-*', 'gulp.*','vinyl-*'],} );

// I require runSequence manually, because it'll be depreceated with the release of Gulp 4.0.0
// Shall rewrite this after the relesease of Gulp 4.0.0
var runSequence = require('run-sequence');

var env =
{
    "dev": plugins.environments.development,
    "dist": plugins.environments.production,
};

function getTask(task) 
{
    return require('./gulp/' + task)(gulp, plugins, env);
}

//************************
//      Main tasks
//************************

gulp.task('dev', function() {

    //VERY NOT DRY, SHALL BE REFACTORED
    plugins.environments.current(env.dev);

    runSequence(
        ['clean-cwd'],
        ['scripts','img','styles','markup', 'misc'],
        ['end']
    );

    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/markup/**/*.pug', ['markup']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/misc/*.*', {dot: true}, ['misc']);
    gulp.watch(['src/img/**/*','!src/img/**/*.svg'], ['img']);
});

gulp.task('build',function(){
    

    //VERY NOT DRY, SHALL BE REFACTORED
    plugins.environments.current(env.dist);

    runSequence(
        ['clean-cwd'],
        ['scripts','img','styles', 'misc'],
        ['markup'],
        ['end']
    );

});

gulp.task('default', function(){
    //VERY NOT DRY, SHALL BE REFACTORED
    plugins.environments.current(env.dist);

    runSequence(
        ['clean-cwd'],
        ['scripts','img','styles', 'misc'],
        ['markup'],
        ['deploy'],
        ['end']
        );
});

//************************
//      Task register
//************************

gulp.task('scripts', getTask('scripts'));
gulp.task('misc', getTask('misc'));
gulp.task('markup', getTask('markup'));
gulp.task('styles', getTask('styles'));
gulp.task('img', getTask('img'));
gulp.task('deploy', getTask('deploy'));

gulp.task('end', function()
{
    if(env.dev())
    {
        //dev stuff here
    }
    else
    {
        require('del').sync(["./cb-manifest.json"]);
    }
});

gulp.task('clean-cwd', function()
{
    return require('del').sync(["./" + (env.dev() ? "dev" : "dist") + "/**"]);
});

gulp.task('list', function()
{
    console.log(plugins);
});
