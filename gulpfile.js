// Include gulp
var gulp = require('gulp'); 


// Include Our Plugins

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var imagemin = require('gulp-imagemin');
var lost = require('lost');
var cssnano = require('gulp-cssnano');

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('_src/scss/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(postcss([
    lost(),
    autoprefixer({browsers: ['> 1%', 'last 2 versions']})
    ]))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('_src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify({preserveComments: 'all'}))
    .pipe(gulp.dest('js'));
});

gulp.task('img', function() {
  return gulp.src('_src/img/*')
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 4
    }))
  .pipe(gulp.dest('img'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('_src/js/*.js', ['scripts']);
  gulp.watch('_src/scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);