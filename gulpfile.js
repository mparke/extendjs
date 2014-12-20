var gulp = require('gulp');
var bump = require('gulp-bump');
var uglify = require('gulp-uglify');
var del = require('del');

var paths = {
  json: ['./bower.json', './package.json'],
  scripts: ['./extend.js']
};

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('bump', function(){
  gulp.src(paths.json)
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

gulp.task('bump-minor', function(){
  gulp.src(paths.json)
  .pipe(bump({ type: 'minor' }))
  .pipe(gulp.dest('./'));
});

gulp.task('bump-major', function(){
  gulp.src(paths.json)
  .pipe(bump({ type: 'major' }))
  .pipe(gulp.dest('./'));
});

gulp.task('js', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(uglify({ preserveComments: 'some' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', [
  'js'
], function(){});