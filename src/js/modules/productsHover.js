"use strict";

import { domElements } from "./domElements.js";

export function productsHover() {
  const productCarts =
    domElements.productList.querySelectorAll(".products__item");
  const productCartHover = document
    .querySelector(".templates")
    .content.querySelector(".production__hover");

  function onProductCart(evt) {
    let target = evt.target;
    let cart = target.offsetParent;
    let element = productCartHover.cloneNode(true);

    for (let i = 0; i < productCarts.length; i++) {
      if (productCarts[i] === cart) {
        if (productCarts[i].classList.contains("products__hover")) {
        } else {
          for (let i = 0; i < productCarts.length; i++) {
            productCarts[i].classList.remove("products__hover");
          }
          productCarts[i].classList.add("products__hover");
        }
      }
    }
    for (let i = 0; i < productCarts.length; i++) {
      if (productCarts[i].classList.contains("products__hover")) {
        if (target.classList.contains("products__img")) {
          productCarts[i].appendChild(element);
          productCarts[i].querySelector(".production__hover").style.height =
            productCarts[i].offsetHeight + "px";
        }
      } else if (productCarts[i].querySelector(".production__hover") !== null) {
        productCarts[i].querySelector(".production__hover").remove();
      }
    }
  }
  domElements.productList.addEventListener("mousemove", onProductCart);
}
