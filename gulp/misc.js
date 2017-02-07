module.exports = function (gulp, plugins, env) {
    return function () {
        return gulp.src('src/misc/**', {dot: true}).pipe(gulp.dest(env.dev() ? 'dev/' : 'dist/'));
    };
};