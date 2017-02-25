var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('styles', function () {
  console.log('Compiling styles...')
  gulp
    .src('./styles/app.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./public/css'));
})

gulp.task('assets', function () {
  console.log('Compiling assets...')
  gulp
    .src('assets/*')
    .pipe(gulp.dest('./public/'));
});

gulp.task('scripts', function () {
  console.log('Compiling scripts...')
  browserify('./src/index.js', {debug: true})
    .transform(babel)
    .bundle()
    .on('error', function (err){
      console.log(err);
    })
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('build', ['styles', 'assets', 'scripts']);

gulp.task('watch', [], () => {
    console.log('Watching over your project...')
    gulp.watch(['./src/**/*.js','./styles/*.scss', './assets/*.*'],
               ['styles','assets','scripts'], (event)=>{
                 console.log(`Event ${event.type} ended`)
    });
});

gulp.task('default', ['styles', 'assets', 'scripts']);
