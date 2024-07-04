const navBar = document.querySelector(".navBar");
const sideBar = document.querySelector(".asideBar");
const overLayer = document.querySelector(".over-layer");
const sideBarCloseBtn = document.querySelector(".asideBar .close-btn");
const sideBarOpenBtn = document.querySelector(".navBar .O-C-sideBar-btn");
const loader = document.querySelector(".preload");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navBar.classList.add("active");
    hideNavBar();
  } else {
    navBar.classList.remove("active");
  }
});

let lastPosition = 0;

function hideNavBar() {
  if (lastPosition < window.scrollY) {
    navBar.classList.add("hide");
  } else {
    navBar.classList.remove("hide");
  }
  lastPosition = window.scrollY;
}

sideBarOpenBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
  overLayer.classList.add("active");
});
sideBarCloseBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
  overLayer.classList.remove("active");
});
overLayer.addEventListener("click", () => {
  sideBar.classList.remove("active");
  overLayer.classList.remove("active");
});
window.addEventListener("load", function () {
  loader.classList.add("loaded");
});
