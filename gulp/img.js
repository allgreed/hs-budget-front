module.exports = function (gulp, plug, dev, dist) {
    return function () {

        var currentDest = dev() ? 'dev/img' : 'dist/img';

        return gulp.src([
            'src/img/**/*',
            '!src/img/sprite.svg',
            '!src/img/svg-source/**/*'])
        .pipe(plug.size({
            title: 'img',
            showFiles: false,
            showTotal: true}))
        .pipe(dist(plug.imagemin()))
        .pipe(gulp.dest(currentDest))
        ;        

    };
};