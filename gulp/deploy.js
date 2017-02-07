var config = 
{
    ftp: 
    {
        localFilesGlob: ['dist/**','!**/*.DS_Store']  
    }
};

module.exports = function (gulp, plugins, env) {
    return function () {

        try 
        {
            config.ftp.keys = require('./ftp_keys.json');
        }
        catch (err)
        {
            if(env.dist())
            {
                console.log(err);
            }
        }        

        function getFtpConnection() 
        {  
            return plugins.vinylFtp.create({
                host: config.ftp.keys.host,
                port: config.ftp.keys.port,
                user: config.ftp.keys.user,
                password: config.ftp.keys.password,
                parallel: 5,
                log: plugins.util.log
            });
        }

        var conn = getFtpConnection();
        return gulp.src(config.ftp.localFilesGlob, { base: './dist/', buffer: false,dot: true })
            .pipe( conn.newer( config.ftp.keys.remoteFolder ) )
            .pipe( conn.dest( config.ftp.keys.remoteFolder ) )
            .pipe(plugins.exit())
            ;
    };
};