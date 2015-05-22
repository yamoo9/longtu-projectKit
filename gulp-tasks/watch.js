'use strict';

var gulp   = require('gulp'),
	config = require('../config')();

var sass_path = config.sass.develop+'**/*.{scss,sass}';

gulp.task('watch', function() {
	gulp.watch(config.html.develop, function() {
		gulp.start('html:ssi');
	});
	gulp.watch(sass_path, function() {
		gulp.start('sass');
	});
});