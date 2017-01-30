module.exports = function (gulp, plug, dev, dist) {
    return function () {

        var currentDest = dev() ? 'dev/js' : 'dist/js';

        return gulp.src(['src/js/**/!(js-fire)*.js','!src/js/**/*.min.js','src/js/js-fire.js'])
        .pipe(plug.concat('main.js'))
        .pipe(plug.size({
            title: 'JS',
            showFiles: true,
            showTotal: false}))

        .pipe(dist(plug.uglify()))
        .pipe(dist(plug.hash({template: "<%=hash %><%=ext %>"})))
        .pipe(dist(plug.size({
            title: 'JS min',
            showFiles: true,
            showTotal: false})))
        .pipe(dist(plug.size({
            title: 'JS min',
            gzip: true,
            showFiles: true, 
            showTotal: false})))

        .pipe(gulp.dest(currentDest))
        .pipe(dist(plug.hash.manifest('assets.json')))
        .pipe(dist(gulp.dest('.')))
        ;
    };
};