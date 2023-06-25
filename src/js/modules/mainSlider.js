"use strict";
import { domElements, mainSlider } from "./domElements.js";
import { eventHandler } from "./handlers.js";

export const slider = {
  slides: mainSlider.sliderList.querySelectorAll(".slider__img-item"),
  sliderGo: function () {
    const crumbTemplate = document
      .querySelector(".templates")
      .content.querySelector(".slider__crumbs-item");

    for (let i = 0; i < slider.slides.length; i++) {
      let crumb = crumbTemplate.cloneNode(true);
      crumb.textContent = i + 1;
      if (i === 0) {
        crumb.classList.add("slider__crumbs-item--active");
      }
      mainSlider.sliderCrumbsList.appendChild(crumb);
    }
    mainSlider.sliderCrumbsList.style.marginLeft =
      -(mainSlider.sliderCrumbsList.offsetWidth / 2) + "px";

    domElements.mainSlider.addEventListener(
      "click",
      eventHandler.sliderHandler
    );
  },
};
