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
  const nav = document.querySelector(".nav");

  menuButton.addEventListener('click', function(evt) {
    console.log ('hello');
    evt.preventDefault;
    let toggle = nav.classList.contains('nav--close');
    if (toggle) {
      nav.classList.remove('nav--close');
      nav.classList.add('nav--open');
    } else {
      nav.classList.remove('nav--open');
      nav.classList.add('nav--close');
    }
  })
}