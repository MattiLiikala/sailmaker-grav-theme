var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');


gulp.task('sass', function ()
{
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('compile', gulp.series('sass'));

gulp.task('watch', function ()
{
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
    console.log('Gulp is watching for changes, Ctrl-C to exit ...');
});

gulp.task('default',  gulp.series('compile'));

