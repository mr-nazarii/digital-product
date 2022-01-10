const { src, dest } = require("gulp");
const { bs } = require("./serv.js");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const purgecss = require("gulp-purgecss");

function styles() {
  return src("./src/css/style.css")
    .pipe(sourcemaps.init())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(concat("styles.min.css"))
    .pipe(
      purgecss({
        content: ["./index.html"],
      })
    )
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest("./dist/css"))
    .pipe(bs.reload({ stream: true }));
}

exports.styles = styles;
