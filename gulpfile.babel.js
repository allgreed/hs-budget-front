import gulp from 'gulp';
import $, { env } from './gulp/plugins.js';

//************************
//      Helper tasks
//************************

export function cleanCWD()
{
    return $.del(["./" + (env.dev() ? "dev" : "dist") + "/**"]);
}

export function setDevEnv(cb)
{
    $.environments.current(env.dev);
    cb();
}

export function setProdEnv(cb)
{
    $.environments.current(env.dist);
    cb();
}

//************************
//      Subtask register
//************************

import markup from './gulp/markup.js'; export { markup };
import misc from './gulp/misc.js'; export { misc }
import scripts from './gulp/scripts.js'; export { scripts }
import styles from './gulp/styles.js'; export { styles }
import img from './gulp/img.js'; export { img }

export function watch() 
{
    gulp.watch('src/styles/**/*.scss', styles);
    gulp.watch('src/markup/**/*.pug', markup);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('src/misc/*.*', {dot: true}, misc);
    gulp.watch(['src/img/**/*','!src/img/**/*.svg'], img);
}

//************************
//      Main tasks
//************************

export const main = gulp.series
(
    cleanCWD,
    gulp.parallel
    (
        scripts,
        img,
        styles,
        misc
    ),
    markup
);

export const build = gulp.series(setProdEnv, main);

export const dev = gulp.series(setDevEnv, main, watch);
export default dev;
