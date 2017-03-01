import gulp from 'gulp';
import $ from './plugins.js';
import { env } from './plugins.js';

export default function styles() 
{
    // SASS compilation
    return gulp.src(['src/styles/*.scss'])
    .pipe($.sass(
    {
        includePaths: ['./src/bower_components/bootstrap-sass/assets/stylesheets/']
    }).on('error', $.sass.logError))

    // CSS processing
    .pipe($.autoprefixer({browsers: ['last 2 versions','>1% in PL'],}))
    .pipe(env.dist($.cleanCss(
        {
            level: 2,
        })))

    // Cache busting
    .pipe(env.dist($.hash({template: "<%=hash %><%=ext %>"})))

    // Styles output
    .pipe(gulp.dest((env.dev() ? 'dev' : 'dist') + '/css'))

    // Cache busting manifest
    .pipe(env.dist($.hash.manifest('cb-manifest.json')))
    .pipe(env.dist(gulp.dest('.')))

    ;
}
