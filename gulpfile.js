const gulp = require('gulp');

const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', () => tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist')));

gulp.task('watch', () => {
  const watcher = gulp.watch('src/**/*', gulp.series('compile'));

  watcher.on('change', (path) => {
    console.log(`File ${path} was changed`);
  });

  watcher.on('add', (path) => {
    console.debug(`File ${path} was added`);
  });

  watcher.on('unlink', (path) => {
    console.debug(`File ${path} was removed`);
  });
});
