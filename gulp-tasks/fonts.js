const { src, dest } = require("gulp");

function fonts() {
  return src("./src/styles/fonts/*").pipe(dest("./dist/css/fonts/"));
}

exports.fonts = fonts;
