module.exports = function (gulp, plugins, env) {
    return function() 
    {
        plugins.fs = require('fs');

        var cacheAliases =
        {
            "main.css": "",
            "bundle.js": ""
        };

        try
        {
            cacheAliases = JSON.parse(plugins.fs.readFileSync('cb-manifest.json', 'utf8'));
        }
        catch (err)
        {
            if(env.dist())
            {
                console.log(err);
            }
        }

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

        // Accounting for cache busting
        .pipe(env.dist(plugins.replace('main.css', cacheAliases["main.css"])))
        .pipe(env.dist(plugins.replace('bundle.js', cacheAliases["bundle.js"])))

        // HTML output
        .pipe(gulp.dest(env.dev() ? 'dev' : 'dist' + '/'))
        ;
    };
};
