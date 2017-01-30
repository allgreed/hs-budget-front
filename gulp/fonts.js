module.exports = function (gulp, plug, dev, dist) {
    return function () {
        
        var currentDest = dev() ? 'dev/fonts' : 'dist/fonts';

        return gulp.src('src/fonts/**')
        .pipe(gulp.dest(currentDest));

    };
};