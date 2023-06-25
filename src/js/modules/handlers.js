"use strict";

import { domElements, mainSlider } from "./domElements.js";
import { slider } from "./mainSlider.js";

export const eventHandler = {
  counter: 0,
  sliderWidth: (function () {
    if (window.screen.width >= 1440) {
      return (
        mainSlider.sliderList.querySelector(".slider__img-item").offsetWidth +
        Number(
          window
            .getComputedStyle(
              mainSlider.sliderList.querySelector(".slider__img-item")
            )
            .marginRight.slice(0, 2)
        )
      );
    } else {
      return mainSlider.sliderList.querySelector(".slider__img-item")
        .offsetWidth;
    }
  })(),

  sliderToggles: [],
  start: mainSlider.sliderList.offsetLeft,
  sliderHandler: function (evt) {
    const target = evt.target;
    eventHandler.sliderToggles = mainSlider.sliderCrumbsList.querySelectorAll(
      ".slider__crumbs-item"
    );

    if (target === mainSlider.sliderNext) {
      eventHandler.sliderNext();
    } else if (target === mainSlider.sliderPrevious) {
      eventHandler.sliderPrevious();
    } else if (target.classList.contains("slider__crumbs-item")) {
      eventHandler.sliderToggle(target);
    }
  },
  sliderNext: function (evt) {
    if (eventHandler.counter < slider.slides.length - 1) {
      mainSlider.sliderList.style.left =
        eventHandler.start - this.sliderWidth * (this.counter + 1) + "px";

      for (let i = 0; i < eventHandler.sliderToggles.length; i++) {
        if (
          eventHandler.sliderToggles[i].classList.contains(
            "slider__crumbs-item--active"
          )
        ) {
          eventHandler.sliderToggles[i].classList.remove(
            "slider__crumbs-item--active"
          );
          eventHandler.sliderToggles[this.counter + 1].classList.add(
            "slider__crumbs-item--active"
          );
        }
      }
      console.log(eventHandler.sliderToggles);
      this.counter++;
    }
  },
  sliderPrevious: function (evt) {
    if (eventHandler.counter > 0) {
      mainSlider.sliderList.style.left =
        eventHandler.start - this.sliderWidth * (this.counter - 1) + "px";

      for (let i = 0; i < eventHandler.sliderToggles.length; i++) {
        if (
          eventHandler.sliderToggles[i].classList.contains(
            "slider__crumbs-item--active"
          )
        ) {
          eventHandler.sliderToggles[i].classList.remove(
            "slider__crumbs-item--active"
          );
        }
      }
      eventHandler.sliderToggles[this.counter - 1].classList.add(
        "slider__crumbs-item--active"
      );
      this.counter--;
    }
  },
  sliderToggle: function (target) {
    for (let i = 0; i < eventHandler.sliderToggles.length; i++) {
      if (
        eventHandler.sliderToggles[i].classList.contains(
          "slider__crumbs-item--active"
        )
      ) {
        eventHandler.sliderToggles[i].classList.remove(
          "slider__crumbs-item--active"
        );
      }
      if (eventHandler.sliderToggles[i] === target) {
        eventHandler.sliderToggles[i].classList.add(
          "slider__crumbs-item--active"
        );
        mainSlider.sliderList.style.left =
          eventHandler.start - this.sliderWidth * i + "px";
        eventHandler.counter = i;
      }
    }
  },
};
