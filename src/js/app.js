"use strict";

import * as filesFunctions from "./modules/functions.js";
import * as openMenu from "./modules/open-menu.js";
import { slider } from "./modules/mainSlider.js";
import { productsHover } from "./modules/productsHover.js";

(function () {
  filesFunctions.isWebp();
  openMenu.openMenu();
  slider.sliderGo();
  productsHover();
})();
