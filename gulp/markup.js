import gulp from 'gulp';
import $, { env } from './plugins.js';

export default function markup() 
{

    const cacheAliases = ( () =>
    {
        try
        {
            return JSON.parse($.fs.readFileSync('cb-manifest.json', 'utf8'));
        }
        catch (err)
        {
            if(env.dist())
            {
                console.log(err);
            }
            return {
                "main.css": "main.css",
                "bundle.js": "bundle.js"
            };
        }
    })();

    //PUG compiling
    gulp.src('src/markup/**/[!_]*.pug')
    .pipe($.pug( {pretty: true} ))
        .on('error', $.notify.onError( (error)  => 'Pug error\n' + error))

    // HTML processing
    .pipe(env.dist($.htmlmin(
    {
        collapseWhitespace: true,
        removeComments: true,
        sortAttributes: true,
        sortClassName: true,
        collapseInlineTagWhitespace: true,
    })))

    // Accounting for cache busting
    .pipe(env.dist($.replace('main.css', cacheAliases["main.css"])))
    .pipe(env.dist($.replace('bundle.js', cacheAliases["bundle.js"])))

    // HTML output
    .pipe(gulp.dest(env.dev() ? 'dev' : 'dist' + '/'))
    ;

    //Delete cb-manifest
    return $.del(["./cb-manifest.json"]);
}
