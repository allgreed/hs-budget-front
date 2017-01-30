//Todo -> not include helper.scss in production build

module.exports = function (gulp, plug, dev, dist) {
    return function () {

        var currentDest = dev() ? 'dev/css' : 'dist/css';

        //SASS compilation
        return gulp.src(['src/styles/*.scss'])
        .pipe(plug.sass({
                includePaths: ['./src/bower_components/bootstrap-sass/assets/stylesheets/']
            }).on('error', plug.sass.logError))
        .pipe(plug.autoprefixer({browsers: ['Safari >= 7','last 2 versions','>1% in PL'],}))
        .pipe(plug.size({title: 'CSS',showFiles: true, showTotal: false}))

        //CSS processing
        .pipe(dist(plug.cssnano({
            discardComments: {
                removeAll: true
            }
        })))
        .pipe(dist(plug.hash({template: "<%=hash %><%=ext %>"})))
        .pipe(dist(plug.size({
            title: 'CSS min',
            showFiles: true,
            showTotal: false})))
        .pipe(dist(plug.size({
            title: 'CSS min',
            gzip: true,showFiles: true,
            showTotal: false})))
        .pipe(gulp.dest(currentDest))
        .pipe(dist(plug.hash.manifest('assets.json')))
        .pipe(dist(gulp.dest('.')))
        ;

    };
};