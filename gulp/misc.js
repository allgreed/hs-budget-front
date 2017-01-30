module.exports = function (gulp, plug, dev) {
    return function () {
        
        var currentDest = dev() ? 'dev/' : 'dist/';

        gulp.src('license.md').pipe(gulp.dest(currentDest));
        gulp.src('src/misc/**', {dot: true}).pipe(gulp.dest(currentDest));
    };
};