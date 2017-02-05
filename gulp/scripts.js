var entryPoint = "./src/js/app.js";

module.exports = function (gulp, plugins, env) {
    return function () {

        plugins.browserify = require('browserify');

        return plugins.browserify(entryPoint)
        .bundle()
        .pipe(plugins.vinylSourceStream('bundle.js'))
        .pipe(plugins.vinylBuffer())
        .pipe(env.dist(plugins.uglify()))
        .pipe(gulp.dest(env.dev() ? 'dev' : 'dist' + '/js'))
        ;
    };
};