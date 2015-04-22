/**
 * Plugins
 * -------
 */

var gulp = require('gulp'); // Gulp is always required
var scss = require('gulp-sass'); // Gulp libsass implementation

/*
*   Configurable paths
*/
var styles = 'style'

/**
 * Tasks
 * -----
 */

/**
 * Compiles SCSS files into CSS
 *
 * @source .scss files
 * @dest .css files
 */
gulp.task('scss', function() {
    return gulp.src(styles + '/*.scss')
        .pipe(scss())
        .pipe(gulp.dest(styles));
});