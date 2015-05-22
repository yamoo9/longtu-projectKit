'use strict';

var gulp   = require('gulp'),
	config = require('../config')(),
	$      = require('gulp-load-plugins')();


gulp.task('sass', function() {
	$.rubySass(config.sass.develop, config.sass.options)
	.on('error', function(err) {
		console.log(err.message);
	})
	.pipe( $.sourcemaps.write() )
	.pipe( $.autoprefixer() )
	.pipe( $.size() )
	.pipe( gulp.dest(config.sass.build) )
	.pipe( server.reload() );
});