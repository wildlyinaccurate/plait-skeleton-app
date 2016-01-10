import gulp from 'gulp'
import gutil from 'gulp-util'
import source from 'vinyl-source-stream'
import browserify from 'browserify'
import jsxTransform from 'jsx-transform'
import jasmine from 'gulp-jasmine'

gulp.task('default', ['build', 'test'])

gulp.task('build', () => {
  const jsxify = jsxTransform.browserifyTransform.configure({
    factory: 'h'
  })

  const b = browserify('src/Main.js', {
    transform: [jsxify, 'babelify'],
    paths: ['./src']
  })

  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('test', () => {
  return gulp.src('test/*.js')
    .pipe(jasmine())
})
