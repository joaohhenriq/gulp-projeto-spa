// parte específica do build para a aplicação
const gulp = require('gulp')
const babel = require('gulp-babel') //fazer transpile do js
const uglify = require('gulp-uglify') //minificar o javascript
const sass = require('gulp-sass') //compilar pra css
const uglifycss = require('gulp-uglifycss') //minificar o css
const concat = require('gulp-concat') //concatenar os arquivos js e css
const htmlmin = require('gulp-htmlmin') //minificar o html

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.imgs'])

gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))// tirar todos os espaços em branco
        .pipe(gulp.dest('build'))
})

gulp.task('app.css', () => {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css')) //concatenar todos os arquivos css em um único arquivo
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('app.js', () => {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
})

gulp.task('app.imgs', () => {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
})
