const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

// run-sequence apenas funciona se colocarmos return em cada um dos métodos
gulp.task('deps.css', () => {
    return gulp.src(['node_modules/font-awesome/css/font-awesome.css'])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})