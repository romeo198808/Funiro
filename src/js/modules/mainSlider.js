"use strict";

import { documentSize, mainSlider } from "./domElements.js";

const data = {
  mainSlider: {
    start: mainSlider.sliderList.offsetLeft,
    sliderWidth: (function () {
      if (documentSize.width >= 1440) {
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
    counter: 0,
    sliderToggles: [],
  },
};

function sliderMainHandler(evt) {
  let slider, dataSlider;
  if (this === mainSlider.mainSlider) {
    slider = mainSlider;
    dataSlider = data.mainSlider;
  }

  const target = evt.target;

  dataSlider.sliderToggles = slider.sliderCrumbsList.querySelectorAll(
    ".slider__crumbs-item"
  );

  if (target === slider.sliderNext) {
    sliderControlHandler.sliderNext(evt, slider, dataSlider);
  } else if (target === slider.sliderPrevious) {
    sliderControlHandler.sliderPrevious(evt, slider, dataSlider);
  } else if (target.classList.contains("slider__crumbs-item")) {
    sliderControlHandler.sliderToggle(target, slider, dataSlider);
  }
  window.addEventListener("resize", function (params) {
    dataSlider.sliderWidth = (function () {
      if (documentSize.width >= 1440) {
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
    })();
    slider.sliderList.style.left =
      dataSlider.start - dataSlider.sliderWidth * dataSlider.counter + "px";
    documentSize.width = window.screen.width;
  });
}

const sliderControlHandler = {
  sliderNext: function (evt, slider, dataSlider) {
    if (dataSlider.counter < slider.slides.length - 1) {
      slider.sliderList.style.left =
        dataSlider.start -
        dataSlider.sliderWidth * (dataSlider.counter + 1) +
        "px";

      for (let i = 0; i < dataSlider.sliderToggles.length; i++) {
        if (
          dataSlider.sliderToggles[i].classList.contains(
            "slider__crumbs-item--active"
          )
        ) {
          dataSlider.sliderToggles[i].classList.remove(
            "slider__crumbs-item--active"
          );
          dataSlider.sliderToggles[dataSlider.counter + 1].classList.add(
            "slider__crumbs-item--active"
          );
        }
      }
      dataSlider.counter++;
    }
  },
  sliderPrevious: function (evt, slider, dataSlider) {
    if (dataSlider.counter > 0) {
      slider.sliderList.style.left =
        dataSlider.start -
        dataSlider.sliderWidth * (dataSlider.counter - 1) +
        "px";

      for (let i = 0; i < dataSlider.sliderToggles.length; i++) {
        if (
          dataSlider.sliderToggles[i].classList.contains(
            "slider__crumbs-item--active"
          )
        ) {
          dataSlider.sliderToggles[i].classList.remove(
            "slider__crumbs-item--active"
          );
        }
      }
      dataSlider.sliderToggles[dataSlider.counter - 1].classList.add(
        "slider__crumbs-item--active"
      );
      dataSlider.counter--;
    }
  },
  sliderToggle: function (target, slider, dataSlider) {
    console.log(dataSlider.start);
    for (let i = 0; i < dataSlider.sliderToggles.length; i++) {
      if (
        dataSlider.sliderToggles[i].classList.contains(
          "slider__crumbs-item--active"
        )
      ) {
        dataSlider.sliderToggles[i].classList.remove(
          "slider__crumbs-item--active"
        );
      }
      if (dataSlider.sliderToggles[i] === target) {
        dataSlider.sliderToggles[i].classList.add(
          "slider__crumbs-item--active"
        );
        slider.sliderList.style.left =
          dataSlider.start - dataSlider.sliderWidth * i + "px";
        dataSlider.counter = i;
      }
    }
  },
};

export const slider = {
  insertCrumbList: function (slider) {
    const crumbTemplate = document
      .querySelector(".templates")
      .content.querySelector(".slider__crumbs-item");
    for (let i = 0; i < slider.slides.length; i++) {
      let crumb = crumbTemplate.cloneNode(true);
      crumb.textContent = i + 1;
      if (i === 0) {
        crumb.classList.add("slider__crumbs-item--active");
      }
      slider.sliderCrumbsList.appendChild(crumb);
    }
    slider.sliderCrumbsList.style.marginLeft =
      -(slider.sliderCrumbsList.offsetWidth / 2) + "px";
  },
  sliderMain: function (sl) {
    slider.insertCrumbList(sl);
    sl.mainSlider.addEventListener("click", sliderMainHandler);
  },
};
