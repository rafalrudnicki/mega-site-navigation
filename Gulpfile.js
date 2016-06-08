
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	del = require('del');


gulp.task('default', function () {});


gulp.task('css', function() {
   gulp.src([
             './assets/scss/style.scss',
             './assets/scss/layout-demo.scss'
             ])
             
        .pipe(sass({ style: 'expanded' }))
        
        .pipe(minifycss({keepBreaks:true}))
        
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
});




gulp.task('js', function() {
    
    gulp.src([

              './assets/js/mega-site-navigation.js'
          ])
          
          .pipe(uglify(
        	  {output: {comments: /^!|@preserve|@license|@cc_on/i}}
          ))
          
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest('./dist/js'));    
});



gulp.task('watch', function() {
	  gulp.watch('./assets/js/*.js', ['js']);
	  gulp.watch('./assets/scss/*.scss', ['css']);
	});



//gulp.task('default',function() {
//    gulp.watch('sass/**/*.scss',['styles']);
//});

/*
gulp.task('watch', function() {  
	  gulp.watch(paths.dev.less, ['frontend.css', 'backend.css']);
	  gulp.watch(paths.dev.js, ['frontend.js', 'backend.js']);
});






*/
