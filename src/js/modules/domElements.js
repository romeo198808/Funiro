"use strict";

export const domElements = {
  menuButton: document.querySelector(".menu__button"),
  header: document.querySelector(".header"),
  main: document.querySelector("body"),
  navList: document.querySelector(".nav__list"),
  mainSlider: document.querySelector(".slider"),
};

export const mainSlider = {
  sliderNext: domElements.mainSlider.querySelector(".slider__button--next"),
  sliderPrevious: domElements.mainSlider.querySelector(
    ".slider__button--previous"
  ),
  sliderCrumbs: domElements.mainSlider.querySelectorAll(".slider__crumbs-item"),
  sliderList: domElements.mainSlider.querySelector(".slider__img-list"),
  sliderCrumbsList: domElements.mainSlider.querySelector(
    ".slider__crumbs-list"
  ),
};
