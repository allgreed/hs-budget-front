module.exports = function (gulp, plugins, env) {
    return function () {

        return gulp.src([
            'src/img/**/*',
            '!src/img/sprite.svg',
            '!src/img/svg-source/**/*'])
        .pipe(env.dist(plugins.imagemin()))
        .pipe(gulp.dest(env.dev() ? 'dev' : 'dist' + '/img'))
        ;        

    };
};