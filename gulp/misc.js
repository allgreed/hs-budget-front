import gulp from 'gulp';
import $ from './plugins.js';
import { env } from './plugins.js';

export default function misc() 
{
    return gulp.src('src/misc/**', {dot: true}).pipe(gulp.dest(env.dev() ? 'dev/' : 'dist/'));
}
