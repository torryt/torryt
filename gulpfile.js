/*
*   Configurable paths
*/
var styles = 'style'

// Gulp Dependencies
var gulp = require('gulp'); // Gulp is always required
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var less = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// Development Dependencies
var jshint = require('gulp-jshint');




/**
 * Tasks
 * -----
 */
gulp.task('lint-client', function() {
  return gulp.src('./client/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
  return gulp.src('./test/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


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