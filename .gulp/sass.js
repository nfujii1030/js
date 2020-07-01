const src = require('gulp').src
const dest = require('gulp').dest
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')

const path = '../src/assets/sass/**/*.scss'

const compile = (isProduction = true) =>
  src(path)
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: isProduction ? 'compressed' : 'expanded',
      }),
    )
    .pipe(
      autoprefixer({
        grid: true,
      }),
    )
    .pipe(gulpif(!isProduction, sourcemaps.write()))
    .pipe(dest('../dist/assets/css'))
compile.displayName = 'compile sass'

exports.path = path
exports.compile = compile
