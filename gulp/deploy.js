// Todo -> move log to configuration

module.exports = function (gulp, plug, dev, dist, config) {
    return function () {

        function getFtpConnection() {  
            return plug.vinylFtp.create({
                host: config.ftp.keys.host,
                port: config.ftp.keys.port,
                user: config.ftp.keys.user,
                password: config.ftp.keys.password,
                parallel: 5,
                log: plug.util.log
            });
        }

        var conn = getFtpConnection();
        return gulp.src(config.ftp.localFilesGlob, { base: './dist/', buffer: false,dot: true })
            .pipe( conn.newer( config.ftp.keys.remoteFolder ) )
            .pipe( conn.dest( config.ftp.keys.remoteFolder ) )
            .pipe(plug.exit())
            ;
    };
};