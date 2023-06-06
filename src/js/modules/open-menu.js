export function openMenu() {
  const menuButton = document.querySelector(".menu__button");
  const header = document.querySelector(".header");
  const main = document.querySelector("body");

  menuButton.addEventListener("click", function (evt) {
    evt.preventDefault;
    let toggle = header.classList.contains("header--close");
    if (toggle) {
      header.classList.remove("header--close");
      header.classList.add("header--open");
      main.classList.add("lock");
    } else {
      header.classList.remove("header--open");
      header.classList.add("header--close");
      main.classList.remove("lock");
    }
  });
}
