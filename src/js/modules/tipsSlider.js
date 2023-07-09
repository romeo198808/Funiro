"use strict";

import { tipsSlider } from "./domElements.js";

export function tipsSliderFunction() {
  console.log(data.slideWidth);
  console.log(tipsSlider.slides.length);
  tipsSlider.mainSlider.addEventListener("click", tipsHandler.tipsClick);
  window.addEventListener("resize", function () {
    data.slideWidth = (() => {
      if (window.screen.width < 768) {
        return tipsSlider.sliderList.querySelector(".tips__slider-item")
          .clientWidth;
      } else {
        return (
          tipsSlider.sliderList.querySelector(".tips__slider-item")
            .clientWidth +
          Number(
            window
              .getComputedStyle(
                tipsSlider.sliderList.querySelector(".tips__slider-item")
              )
              .marginRight.slice(0, 2)
          )
        );
      }
    })();
    console.log(data.slideWidth);
  });
}

const data = {
  counter: 0,
  start: 0,
  slideWidth: (() => {
    if (window.screen.width < 768) {
      return tipsSlider.sliderList.querySelector(".tips__slider-item")
        .clientWidth;
    } else {
      return (
        tipsSlider.sliderList.querySelector(".tips__slider-item").clientWidth +
        Number(
          window
            .getComputedStyle(
              tipsSlider.sliderList.querySelector(".tips__slider-item")
            )
            .marginRight.slice(0, 2)
        )
      );
    }
  })(),
};

const tipsHandler = {
  tipsClick: function (evt) {
    const target = evt.target;
    if (target === tipsSlider.sliderNext) {
      tipsHandler.nextSlide();
    } else if (target === tipsSlider.sliderPrevious) {
      tipsHandler.previousSlide();
    }
  },
  nextSlide: function () {
    console.log(data.counter);
    data.counter++;

    if (data.counter >= tipsSlider.slides.length) {
      data.counter = 0;
    }
    tipsSlider.sliderList.style.left = -data.slideWidth * data.counter + "px";
  },
  previousSlide: function () {
    console.log(data.counter);

    data.counter--;

    if (data.counter < 0) {
      data.counter = tipsSlider.slides.length - 1;
    }
    tipsSlider.sliderList.style.left = -data.slideWidth * data.counter + "px";
  },
};
