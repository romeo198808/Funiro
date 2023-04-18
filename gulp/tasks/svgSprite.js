import svgSprite from "gulp-svg-sprite";

export const svgSprit = () => {
  return app.gulp.src(`${app.path.src.svgicons}`)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "SVG",
      message: "Error: <%= error.message %>"
    }))
  )
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: `../icons/sprite.svg`,
        example: true
      }
    }
  }))
  .pipe(app.gulp.dest(`${app.path.build.images}`));
}