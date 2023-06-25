"use strict";
import { domElements } from "./domElements.js";
import { renderMenuList } from "./renderMenuList.js";

export function openMenu() {
  const screenWidth = window.screen.width;
  if (screenWidth < 768) {
    domElements.menuButton.addEventListener("click", function (evt) {
      evt.preventDefault;

      let toggle = domElements.header.classList.contains("header--close");
      if (toggle) {
        domElements.header.classList.remove("header--close");
        domElements.header.classList.add("header--open");
        domElements.main.classList.add("lock");

        domElements.navList.addEventListener("click", renderMenuList);
      } else {
        domElements.header.classList.remove("header--open");
        domElements.header.classList.add("header--close");
        domElements.main.classList.remove("lock");
        domElements.navList.removeEventListener("click", renderMenuList);
      }
    });
  } else {
    domElements.navList.addEventListener("click", renderMenuList);
  }
}
