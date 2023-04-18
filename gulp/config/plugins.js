import replace from "gulp-replace";//Поиск и замена
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import newer from "gulp-newer";//Проверка обновления
import ifPlugin from "gulp-if";//Условное ветвление

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin
}