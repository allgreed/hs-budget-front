module.exports = function (gulp, plug, dev) {
    return function () {
        
        var currentDest = dev() ? 'dev/' : 'dist/';

        gulp.src('src/misc/**', {dot: true}).pipe(gulp.dest(currentDest));
    };
};