module.exports = function (gulp, plugins, env) {
    return function() 
    {
        //PUG compiling
        return gulp.src('src/markup/**/[!_]*.pug')
        .pipe(plugins.pug( {pretty: true} ))
            .on('error', plugins.notify.onError(function (error) 
                {
                    return 'Pug error\n' + error;
                }))

        // HTML processing
        .pipe(env.dist(plugins.htmlmin(
        {
            collapseWhitespace: true,
            removeComments: true,
            sortAttributes: true,
            sortClassName: true,
            collapseInlineTagWhitespace: true,
        })))

        .pipe(gulp.dest(env.dev() ? 'dev' : 'dist' + '/'))
        ;
    };
};