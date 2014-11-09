var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var bump = require('gulp-bump');
var git = require('gulp-git');
var del = require('del');
var header = require('gulp-header');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');

var pkg = require('./bower.json');
var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @copyright <%= pkg.authors %> ' + (new Date()).getFullYear(),
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var paths = {
  json: ['./bower.json', './package.json'],
  js: ['./src/extend.js']
};

gulp.task('clean', function(cb) {
  del(['./dist'], cb);
});

gulp.task('bump-patch', function(){ 
  return gulp.src(paths.json)
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('bump-minor', function(){ 
  return gulp.src(paths.json)
    .pipe(bump({ type: 'minor' }))
    .pipe(gulp.dest('./'));
});

gulp.task('bump-major', function(){ 
  return gulp.src(paths.json)
    .pipe(bump({ type: 'major' }))
    .pipe(gulp.dest('./'));
});

gulp.task('commit-bump', function() {
  return gulp.src(paths.json)
    .pipe(git.add())
    .pipe(git.commit('Bump version to ' + require('./bower.json').version));
});

gulp.task('tag', function() {
  git.tag('v' + require('./bower.json').version, function(err) {
    if (err) {
      throw err;
    }
  });
});

gulp.task('js', ['clean'], function() {
  return gulp.src(paths.js)
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js_min', ['clean'], function() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(cb){
  runSequence('clean', ['js', 'js_min'], cb);
});
