import gulp from 'gulp';
import $ from './plugins.js';
import { env } from './plugins.js';

export default function markup() 
{

    var cacheAliases =
    {
        "main.css": "",
        "bundle.js": ""
    };

    try
    {
        cacheAliases = JSON.parse($.fs.readFileSync('cb-manifest.json', 'utf8'));
    }
    catch (err)
    {
        if(env.dist())
        {
            console.log(err);
        }
    }

    //PUG compiling
    gulp.src('src/markup/**/[!_]*.pug')
    .pipe($.pug( {pretty: true} ))
        .on('error', $.notify.onError(function (error) 
            {
                return 'Pug error\n' + error;
            }))

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
