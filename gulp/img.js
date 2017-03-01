import gulp from 'gulp';
import $ from './plugins.js';
import { env } from './plugins.js';

export default function img() 
{
    return gulp.src([
        'src/img/**/*',
        '!src/img/sprite.svg',
        '!src/img/svg-source/**/*'])
    .pipe(env.dist($.imagemin()))
    .pipe(gulp.dest((env.dev() ? 'dev' : 'dist') + '/img'))
    ;
}
