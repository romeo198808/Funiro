export function isWebp(params) {
  function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
}

export function openMenu() {
  const menuButton = document.querySelector(".menu__button");
  const header = document.querySelector(".header");
  const main = document.querySelector('body');

  menuButton.addEventListener('click', function(evt) {
    evt.preventDefault;
    let toggle = header.classList.contains('header--close');
    if (toggle) {
      header.classList.remove('header--close');
      header.classList.add('header--open');
      main.classList.add('lock');
    } else {
      header.classList.remove('header--open');
      header.classList.add('header--close');
      main.classList.remove('lock');
    }
  })
}