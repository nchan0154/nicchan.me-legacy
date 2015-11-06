// Include gulp
var gulp = require('gulp'); 


// Include Our Plugins

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');



// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('_assets/css/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('_assets/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('_assets/js/src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('_assets/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_assets/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('_js/src/*.js', ['scripts']);
    gulp.watch('_scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);