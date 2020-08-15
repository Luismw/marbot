const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();

function browser_sync(done) {
    browserSync.init({
        proxy: "http://localhost/portafolio/marbot/"
    });
    gulp.watch("./src/sass/**/*.scss", css);
    gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("./**/*.html").on('change', browserSync.reload);

    done();
}

function css(done) {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(cleanCSS({
            compatibility: 'ie8',
            processImport: true,
            inline: ['none']
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());

    done();
};

function js(done) {
    gulp.src('./src/js/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('assets/js/'))

    done();
};

gulp.task("css", css);
gulp.task("js", js);
gulp.task("browser_sync", browser_sync);
gulp.task("default",  gulp.parallel(css, js, browser_sync));