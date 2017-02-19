var entryPoint = "./src/js/app.js";

module.exports = function (gulp, plugins, env) {
    return function () {

        plugins.browserify = require('browserify');

        // Scripts bundling
        return plugins.browserify(entryPoint)
        .bundle()
        .pipe(plugins.vinylSourceStream('bundle.js'))
        .pipe(plugins.vinylBuffer())

        // Scripts proccessing
        .pipe(env.dist(plugins.replace('development', 'production')))
        .pipe(env.dist(plugins.uglify()))

        // Cache busting
        .pipe(env.dist(plugins.hash({template: "<%=hash %><%=ext %>"})))

        // Styles output
        .pipe(gulp.dest(env.dev() ? 'dev' : 'dist' + '/js'))

        // Cache busting manifest
        .pipe(env.dist(plugins.hash.manifest('cb-manifest.json')))
        .pipe(env.dist(gulp.dest('.')))
        
        ;
    };
};
