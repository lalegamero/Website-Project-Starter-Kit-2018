'use strict';

// Define some plugins
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create(); // create a browser sync instance
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


// Serve files from the root of this project
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
        baseDir: "./dist"
    },
    notify: false
  });
});


// Compile Sass files
gulp.task('postcss', function() {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sourceMaps.init())
    .pipe(sass({
       errLogToConsole: true,
       outputStyle: 'expanded'
    }))
    .pipe(postcss([
       autoprefixer({ browsers: ['last 4 version'] })
    ]))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./src/css/'))
    .pipe(browserSync.stream())
});


// Minify and optimize style.css.
gulp.task('cssnano', ['postcss'], function() {
  return gulp.src('./src/css/main.css')
   // Optimize and minify main.css
   .pipe(cssnano({
      safe: true // Use safe optimizations
   }))
   // Rename main.css to style.min.css
   .pipe(rename('style.min.css'))
   // Write style.min.css to the dist directory
   .pipe(gulp.dest('./dist/css/'))
   .pipe(browserSync.stream());
});


// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    // Concatenate all JS file into single file
    .pipe(concat('main.js'))
    // Minify the file
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    // Output
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({
      stream: true  // prompts a reload after compilation
    }))
});


// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./src/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true // prompts a reload after compilation
    }))
});


// Gulp task to optimize & minify images
gulp.task('images', function(){
  return gulp.src('./src/img/**/*.+(png|jpg|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});


// Watch for changes within the source folder
gulp.task('watch', function() {
    // Watch Sass, JS & HTML files
    gulp.watch('./src/sass/**/*.sass', ['cssnano']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
    gulp.watch('./src/**/*.html', ['pages']);
    gulp.watch('./src/img/**/*.+(png|jpg|svg)', ['images']);
    // gulp.watch(['src/*.html', 'src/sass/**/*.scss', 'src/js/**/*.js']).on('change', browserSync.reload);
});


// Clean output directory
gulp.task('clean', () => del(['dist']));


// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'browserSync',
    'cssnano',
    'scripts',
    'pages',
    'images',
    'watch'
  );
});
