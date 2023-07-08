"use strict";
import { slider } from "./mainSlider.js";
import { documentSize, domElements, roomsSlider } from "./domElements.js";

export function roomsSliderFunction(sl) {
  slider.insertCrumbList(sl);

  data.sliderToggles = roomsSlider.sliderCrumbsList.querySelectorAll(
    ".slider__crumbs-item"
  );

  roomsSlider.mainSlider.addEventListener(
    "click",
    roomsSliderHandler.sliderHandler
  );
}
const data = {
  sliderWidth: (function () {
    for (let i = 0; i < roomsSlider.slides.length; i++) {
      if (
        !roomsSlider.slides[i].classList.contains("rooms__slider-img--active")
      ) {
        return (
          roomsSlider.slides[i].offsetParent.offsetWidth +
          Number(
            window
              .getComputedStyle(
                roomsSlider.sliderList.querySelector(".rooms__slider-item")
              )
              .marginRight.slice(0, 2)
          )
        );
      }
    }
  })(),
  counter: 0,
  start: roomsSlider.sliderList.offsetLeft,
  sliderToggles: [],
};
const roomsSliderHandler = {
  sliderHandler: function (evt) {
    const target = evt.target;
    if (documentSize.width < 768) {
      roomsSliderHandler.sliderClickHandler(target);
      roomsSliderHandler.sliderPreviewHandler();
      roomsSliderHandler.sliderListMobileHandler();

      window.addEventListener("resize", function (evt) {
        roomsSlider.sliderPreview.style.width = "";
        roomsSlider.sliderPreview.style.height = "";
        roomsSliderHandler.sliderListMobileHandler;
        documentSize.width = window.screen.width;
      });
    } else {
      roomsSliderHandler.sliderClickHandler(target);
      roomsSliderHandler.sliderListHandler();

      window.addEventListener("resize", function (evt) {
        data.sliderWidth = (function () {
          for (let i = 0; i < roomsSlider.slides.length; i++) {
            if (
              !roomsSlider.slides[i].classList.contains(
                "rooms__slider-img--active"
              )
            ) {
              return (
                roomsSlider.slides[i].offsetParent.offsetWidth +
                Number(
                  window
                    .getComputedStyle(
                      roomsSlider.sliderList.querySelector(
                        ".rooms__slider-item"
                      )
                    )
                    .marginRight.slice(0, 2)
                )
              );
            }
          }
        })();
        roomsSliderHandler.sliderListHandler();
        documentSize.width = window.screen.width;
      });
    }
  },
  sliderClickHandler: function (target) {
    if (target.classList.contains("rooms__slider-img")) {
      for (let i = 0; i < roomsSlider.slides.length; i++) {
        roomsSlider.slides[i].offsetParent.classList.remove(
          "rooms__slider-item--active"
        );
        roomsSlider.slides[i].classList.remove("rooms__slider-img--active");
        if (roomsSlider.slides[i] === target) {
          data.counter = i;
          roomsSlider.slides[i].offsetParent.classList.add(
            "rooms__slider-item--active"
          );
          roomsSlider.slides[i].classList.add("rooms__slider-img--active");
          roomsSliderHandler.togglesHandler(i);
        }
      }
    } else if (target.offsetParent === roomsSlider.sliderCrumbsList) {
      for (let i = 0; i < data.sliderToggles.length; i++) {
        if (target === data.sliderToggles[i]) {
          data.counter = i;
          roomsSliderHandler.togglesHandler(i);
          for (let i = 0; i < roomsSlider.slides.length; i++) {
            roomsSlider.slides[i].offsetParent.classList.remove(
              "rooms__slider-item--active"
            );
            roomsSlider.slides[i].classList.remove("rooms__slider-img--active");
          }
          roomsSlider.slides[i].offsetParent.classList.add(
            "rooms__slider-item--active"
          );
          roomsSlider.slides[i].classList.add("rooms__slider-img--active");
        }
      }
    } else if (target === roomsSlider.sliderNext) {
      roomsSliderHandler.sliderNext();
    } else if (target === roomsSlider.sliderPrevious) {
      roomsSliderHandler.sliderPrevious();
    }
  },
  sliderPreviewHandler: function () {
    let picture =
      roomsSlider.slides[data.counter].parentElement.cloneNode(true);
    roomsSlider.sliderPreview.style.width =
      roomsSlider.sliderPreview.clientWidth + "px";
    roomsSlider.sliderPreview.style.height =
      roomsSlider.sliderPreview.clientHeight + "px";
    roomsSlider.sliderPreview.textContent = "";
    roomsSlider.sliderPreview.insertAdjacentElement("afterbegin", picture);
    roomsSlider.sliderPreview.style.width = "";
  },
  sliderListMobileHandler: function () {
    roomsSlider.sliderList.style.left =
      data.start - data.sliderWidth * data.counter + "px";
  },
  sliderListHandler: function () {
    data.start = roomsSlider.sliderList.clientLeft;
    roomsSlider.sliderList.style.left =
      data.start - data.sliderWidth * data.counter + "px";
  },
  togglesHandler: function (ind) {
    for (let i = 0; i < data.sliderToggles.length; i++) {
      data.sliderToggles[i].classList.remove("slider__crumbs-item--active");
    }
    data.sliderToggles[ind].classList.add("slider__crumbs-item--active");
  },
  sliderNext: function () {
    if (data.counter < roomsSlider.slides.length - 1) {
      roomsSlider.sliderList.style.left =
        data.start - data.sliderWidth * (data.counter + 1) + "px";

      for (let i = 0; i < data.sliderToggles.length; i++) {
        if (
          data.sliderToggles[i].classList.contains(
            "slider__crumbs-item--active"
          )
        ) {
          data.sliderToggles[i].classList.remove("slider__crumbs-item--active");
          data.sliderToggles[data.counter + 1].classList.add(
            "slider__crumbs-item--active"
          );
        }
      }
      data.counter++;
    }
  },
  sliderPrevious: function () {
    if (data.counter > 0) {
      roomsSlider.sliderList.style.left =
        data.start - data.sliderWidth * (data.counter - 1) + "px";

      for (let i = 0; i < data.sliderToggles.length; i++) {
        if (
          data.sliderToggles[i].classList.contains(
            "slider__crumbs-item--active"
          )
        ) {
          data.sliderToggles[i].classList.remove("slider__crumbs-item--active");
        }
      }
      data.sliderToggles[data.counter - 1].classList.add(
        "slider__crumbs-item--active"
      );
      data.counter--;
    }
  },
};
