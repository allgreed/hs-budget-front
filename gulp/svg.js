module.exports = function (gulp, plug, dev, dist) {
    return function () {

        var currentDest = dev() ? 'dev/img' : 'dist/img';

        return gulp.src('src/img/**/*.svg')
        .pipe(plug.size({
            title: 'SVG',
            showFiles: false,
            showTotal: true}))

        .pipe(dist(plug.svgmin({
            plugins: [{
                cleanupIDs: {
                    remove: false,
                }
            }]
        })))
        .pipe(dist(plug.size({
            title: 'SVG min',
            showFiles: false,
            showTotal: true})))

        .pipe(gulp.dest(currentDest))
        ;

    };
};