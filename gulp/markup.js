module.exports = function (gulp, plug, dev, dist) {
    return function () {

        var currentDest = dev() ? 'dev/' : 'dist/';

        //PUG compiling
        return gulp.src('src/markup/**/[!_]*.pug')
        .pipe(plug.pug({pretty: true})).on('error',
                plug.notify.onError(function (error) {
            return 'Jade error\n' + error;
            }))
        .pipe(plug.size({title: 'HTML'}))

        // HTML processing
        .pipe(dist(plug.processhtml()))

        .pipe(dist(plug.htmlmin({
            collapseWhitespace: true,
            removeComments: true})))
        .pipe(dist(plug.size({title: 'HTML min'})))
        .pipe(dist(plug.size({title: 'HTML min',gzip: true}))) 
        .pipe(gulp.dest(currentDest))
        ;
    };
};