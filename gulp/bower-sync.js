module.exports = function (gulp, plug, dev, dist) {
    return function () {
        return gulp.src('src/bower_components/**/*').pipe(gulp.dest('dev/bower_components'));
    };
};