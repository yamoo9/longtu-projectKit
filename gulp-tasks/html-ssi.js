'use strict';

var gulp   = require('gulp'),
	config = require('../config')(),
	$      = require('gulp-load-plugins')();


gulp.task('html:ssi', function() {
	gulp.src( config.html.develop )
		.pipe( $.htmlSsi() )
		.pipe( $.if(config.isBuild, $.minifyHtml( config.html.options )) )
		.pipe( gulp.dest(config.html.build) )
		.pipe( server.reload() );
});