"use strict";

import * as filesFunctions from "./modules/functions.js";
import * as openMenu from "./modules/open-menu.js";
import { slider } from "./modules/mainSlider.js";
import { tipsSliderFunction } from "./modules/tipsSlider.js";
import { productsHover } from "./modules/productsHover.js";
import { mainSlider, roomsSlider } from "./modules/domElements.js";
import { roomsSliderFunction } from "./modules/roomsSlider.js";

(function () {
  filesFunctions.isWebp();
  openMenu.openMenu();
  slider.sliderMain(mainSlider);
  roomsSliderFunction(roomsSlider);
  tipsSliderFunction();
  productsHover();
})();
