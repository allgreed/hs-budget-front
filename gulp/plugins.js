import _plugins from 'gulp-load-plugins';

let plugins = _plugins({pattern: ['gulp-*', 'gulp.*','vinyl-*']});

import fs from 'fs'; plugins.fs = fs;
import del from 'del'; plugins.del = del;
import browserify from 'browserify'; plugins.browserify = browserify;

export default plugins;

export const env =
{
    "dev": plugins.environments.development,
    "dist": plugins.environments.production,
};
