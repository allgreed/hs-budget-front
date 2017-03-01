import gulp from 'gulp';
import $, { env } from './plugins.js';

export default function scripts() 
{
        const entryPoint = "./src/js/app.js";
        
        // Scripts bundling
        return $.browserify(entryPoint)
        .bundle()
        .pipe($.vinylSourceStream('bundle.js'))
        .pipe($.vinylBuffer())

        // Scripts proccessing
        .pipe(env.dist($.replace('development', 'production')))
        .pipe(env.dist($.uglify()))

        // Cache busting
        .pipe(env.dist($.hash({template: "<%=hash %><%=ext %>"})))

        // Styles output
        .pipe(gulp.dest((env.dev() ? 'dev' : 'dist') + '/js'))

        // Cache busting manifest
        .pipe(env.dist($.hash.manifest('cb-manifest.json')))
        .pipe(env.dist(gulp.dest('.')))
        ;
}
