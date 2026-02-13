const gulp = require("gulp");
// const { src, dest } = require("gulp");

// todo: htmls and assets
const copy = require("gulp-copy");

gulp.task("copy", () => {
  return gulp.src(["./*.html", "./assets/**/*"]).pipe(copy("build"));
});

// todo: styles
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");

gulp.task("styles", () => {
  return gulp
    .src("./*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: true,
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest("./build/css"));
});

// todo: scripts
const bundleJS = require("gulp-concat");
const minifyJS = require("gulp-terser");

gulp.task("scripts", () => {
  return gulp
    .src("./js/**/*.js")
    .pipe(bundleJS("bundle.js"))
    .pipe(minifyJS())
    .pipe(gulp.dest("./build/js"));
});

// todo: build
gulp.task("build", gulp.series("copy", "styles", "scripts"));
