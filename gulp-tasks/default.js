'use strict';

var gulp = require('gulp');

gulp.task('default', ['server', 'html:ssi', 'sass', 'watch']);