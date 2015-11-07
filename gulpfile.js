// npm install gulp gulp-compass gulp-autoprefixer gulp-minify-css gulp-uglify gulp-rename gulp-concat gulp-notify gulp-livereload gulp-plumber path gulp-webserver -g 


//load plugins
var gulp             = require('gulp'),
	compass          = require('gulp-compass'),
	autoprefixer     = require('gulp-autoprefixer'),
	minifycss        = require('gulp-minify-css'),
	uglify           = require('gulp-uglify'),
	rename           = require('gulp-rename'),
	concat           = require('gulp-concat'),
	notify           = require('gulp-notify'),
	livereload       = require('gulp-livereload'),
	plumber          = require('gulp-plumber'),
	path             = require('path'),
	webserver		 = require('gulp-webserver');
	
//the title and icon that will be used for the Grunt notifications
var notifyInfo = {
	title: 'Gulp',
	icon: path.join(__dirname, 'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
		title: notifyInfo.title,
		icon: notifyInfo.icon,
		message: "Error: <%= error.message %>"
	})
};

//compiling css
gulp.task('styles-views', function() {
	return gulp.src(['public/scss/**/*.*'])
		.pipe(plumber(plumberErrorHandler))
		.pipe(compass({
			config_file: 'config.rb',
			css: 'public/css',
			sass: 'public/scss',
			image: 'public/img'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('public/css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('public/css'));
});

gulp.task('webserver-views', function() {
  return gulp.src('./public')
    .pipe(webserver({
      livereload: true,
	  host: '0.0.0.0',
      open: 'http://localhost:1337/index.html',
	  port: 1337,
      directoryListing: {
		enable: true,
        path:   './public',
		fallback: 'index.html'  
	  }	  
    }));
});

//watch
gulp.task('live', function() {
	//watch .scss files
	gulp.watch('public/scss/**/*.*', ['styles-views']);  

});

gulp.task('default', ['styles-views','live','webserver-views']);