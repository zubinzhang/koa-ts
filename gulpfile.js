const del = require('del');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

const srcRoot = 'src';
const distRoot = 'build';

gulp.task('clean', function () {
  return del([
    distRoot,
  ]);
});

gulp.task('build', function () {
  return tsProject.src()
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(distRoot));
});

gulp.task('dev', ['build'], function () {
  return nodemon({
    script: 'build/app.js',  // 服务的启动文件
    watch: srcRoot,    // 源代码目录
    tasks: ['build'], // 在重启服务前需要执行的任务
    ext: 'ts', // 监听.ts结尾的文件 必须
    // 设置环境
    env: {
      'NODE_ENV': 'development'
    },
    // 必须开启debug模式
    exec: 'node --inspect'
  });
});

gulp.task('watch', ['clean', 'dev'], function () {
  gulp.watch('./src/**/*.ts', ['dev']);
})
