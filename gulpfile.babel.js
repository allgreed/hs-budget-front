import gulp from 'gulp';

// Paths here?

// This entire block shall be removed and refactored
import _plugins from 'gulp-load-plugins';
const plugins = _plugins({pattern: ['gulp-*', 'gulp.*','vinyl-*']});

function getTask(task) 
{
    return require('./gulp/' + task)(gulp, plugins, env);
}

// Require envs manually and rewrite this
const env =
{
    "dev": plugins.environments.development,
    "dist": plugins.environments.production,
};


//************************

import del from 'del';

function cleanCWD()
{
    plugins.environments.current(env.dist);
    return del(["./" + (env.dev() ? "dev" : "dist") + "/**"]);
}

gulp.task('cwd', cleanCWD);

gulp.task('build', function(){
    
    plugins.environments.current(env.dist);
    return cleanCWD();

});

/*gulp.task('build',gulp.series(function(cb){
    

    //VERY NOT DRY, SHALL BE REFACTORED
    plugins.environments.current(env.dist);

    /*runSequence(
        ['clean-cwd'],
        ['scripts','img','styles', 'misc'],
        ['markup'],
        ['end']
    );
    cb();
}, 'cwd'));*/

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
        del.sync(["./cb-manifest.json"]);
    }
});


//************************
//      Main tasks
//************************

gulp.task('dev', function() {

    //VERY NOT DRY, SHALL BE REFACTORED
    plugins.environments.current(env.dev);

    /*runSequence(
        ['clean-cwd'],
        ['scripts','img','styles','markup', 'misc'],
        ['end']
    );*/

    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/markup/**/*.pug', ['markup']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/misc/*.*', {dot: true}, ['misc']);
    gulp.watch(['src/img/**/*','!src/img/**/*.svg'], ['img']);
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
