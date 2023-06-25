"use strict";

export function renderMenuList(evt) {
  const target = evt.target;
  const list = target.nextElementSibling;
  list.classList.toggle("nav__inner-list--open");
}
