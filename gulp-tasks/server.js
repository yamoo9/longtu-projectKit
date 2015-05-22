'use strict';

var gulp   = require('gulp'),
	config = require('../config')(),
	$      = require('gulp-load-plugins')(),
	connect= $.connectMulti();

global.server = connect;

gulp.task('server', connect.server({
	root: [config.build],
	port: 1337,
	livereload: true,
	open: {
		// file: 'index.html',
		browser: '' // 'chrome', Google Chrome', 'firefox', 'iexpolorer'
	}
}));