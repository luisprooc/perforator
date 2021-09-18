const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  const watcher = gulp.watch('src/**/*', gulp.series('compile'));

  watcher.on('change', function(path) {
    console.debug(`File ${path} was changed`);
  });
  
  watcher.on('add', function(path) {
    console.debug(`File ${path} was added`);
  });
  
  watcher.on('unlink', function(path) {
    console.debug(`File ${path} was removed`);
  });
  
});