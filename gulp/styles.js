module.exports = function (gulp, plugins, env) {
    return function () {

        // SASS compilation
        return gulp.src(['src/styles/*.scss'])
        .pipe(plugins.sass(
        {
            includePaths: ['./src/bower_components/bootstrap-sass/assets/stylesheets/']
        }).on('error', plugins.sass.logError))

        // CSS processing
        .pipe(plugins.autoprefixer({browsers: ['last 2 versions','>1% in PL'],}))
        .pipe(env.dist(plugins.cleanCss(
            {
                level: 2,
            })))

        // Cache busting
        .pipe(env.dist(plugins.hash({template: "<%=hash %><%=ext %>"})))

        // Styles output
        .pipe(gulp.dest(env.dev() ? 'dev' : 'dist' + '/css'))

        // Cache busting manifest
        .pipe(env.dist(plugins.hash.manifest('cb-manifest.json')))
        .pipe(env.dist(gulp.dest('.')))

        ;

    };
};
