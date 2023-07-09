"use strict";
export const documentSize = {
  width: window.screen.width,
};
export const domElements = {
  menuButton: document.querySelector(".menu__button"),
  header: document.querySelector(".header"),
  main: document.querySelector("body"),
  navList: document.querySelector(".nav__list"),
  productList: document.querySelector(".products__list"),
};

export const mainSlider = {
  mainSlider: document.querySelector(".slider"),
  slides: document
    .querySelector(".slider")
    .querySelectorAll(".slider__img-item"),
  sliderNext: document
    .querySelector(".slider")
    .querySelector(".slider__button--next"),
  sliderPrevious: document
    .querySelector(".slider")
    .querySelector(".slider__button--previous"),
  sliderCrumbs: document
    .querySelector(".slider")
    .querySelectorAll(".slider__crumbs-item"),
  sliderList: document
    .querySelector(".slider")
    .querySelector(".slider__img-list"),
  sliderCrumbsList: document
    .querySelector(".slider")
    .querySelector(".slider__crumbs-list"),
};

export const roomsSlider = {
  mainSlider: document.querySelector(".rooms__wrap"),
  slides: document
    .querySelector(".rooms__wrap")
    .querySelectorAll(".rooms__slider-img"),
  sliderPreview: document
    .querySelector(".rooms__wrap")
    .querySelector(".rooms__slider-main"),

  sliderNext: document
    .querySelector(".rooms__wrap")
    .querySelector(".slider__button--next"),
  sliderPrevious: document
    .querySelector(".rooms__wrap")
    .querySelector(".slider__button--previous"),
  sliderCrumbs: document
    .querySelector(".rooms__wrap")
    .querySelectorAll(".slider__crumbs-item"),
  sliderList: document
    .querySelector(".rooms__wrap")
    .querySelector(".rooms__slider"),
  sliderCrumbsList: document
    .querySelector(".rooms__wrap")
    .querySelector(".slider__crumbs-list"),
};
export const tipsSlider = {
  mainSlider: document.querySelector(".tips__wrapper"),
  slides: document.querySelectorAll(".tips__slider-img"),

  sliderNext: document
    .querySelector(".tips__wrapper")
    .querySelector(".slider__button--next"),

  sliderPrevious: document
    .querySelector(".tips__wrapper")
    .querySelector(".slider__button--previous"),

  sliderList: document
    .querySelector(".tips__wrapper")
    .querySelector(".tips__slider"),
};
