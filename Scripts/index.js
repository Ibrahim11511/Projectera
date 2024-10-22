const navBar = document.querySelector(".navBar");
const sideBar = document.querySelector(".asideBar");
const overLayer = document.querySelector(".over-layer");
const sideBarCloseBtn = document.querySelector(".asideBar .close-btn");
const sideBarOpenBtn = document.querySelector(".navBar .O-C-sideBar-btn");
const loader = document.querySelector(".preload");
const heroSliderItems = document.querySelectorAll(".slider-item");
const heroSliderPrevBtn = document.querySelector(".slider-prev-btn");
const heroSliderNextBtn = document.querySelector(".slider-next-btn");
let autoSlideInterval;
let lastPosition = 0;
autoSlide();

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navBar.classList.add("active");
    hideNavBar();
  } else {
    navBar.classList.remove("active");
  }
});

function hideNavBar() {
  if (lastPosition < window.scrollY) {
    navBar.classList.add("hide");
  } else {
    navBar.classList.remove("hide");
  }
  lastPosition = window.scrollY;
}

sideBarOpenBtn.addEventListener("click", function () {
  sideBar.classList.add("active");
  overLayer.classList.add("active");
  this.style.visibility = "hidden";
});
sideBarCloseBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
  overLayer.classList.remove("active");
  sideBarOpenBtn.style.visibility = "visible";
});
overLayer.addEventListener("click", () => {
  sideBar.classList.remove("active");
  overLayer.classList.remove("active");
});
window.addEventListener("load", function () {
  loader.classList.add("loaded");
});

let currentSlidePos = 0;

function slideForward() {
  heroSliderItems[currentSlidePos].classList.remove("active");
  currentSlidePos++;
  if (currentSlidePos == heroSliderItems.length) currentSlidePos = 0;
  heroSliderItems[currentSlidePos].classList.add("active");
}
function slideBack() {
  heroSliderItems[currentSlidePos].classList.remove("active");
  currentSlidePos--;
  if (currentSlidePos == -1) currentSlidePos = heroSliderItems.length - 1;
  heroSliderItems[currentSlidePos].classList.add("active");
}
heroSliderNextBtn.addEventListener("click", slideForward);
heroSliderPrevBtn.addEventListener("click", slideBack);
heroSliderNextBtn.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});
heroSliderPrevBtn.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});
heroSliderNextBtn.addEventListener("mouseleave", () => {
  autoSlide();
});
heroSliderPrevBtn.addEventListener("mouseleave", () => {
  autoSlide();
});

function autoSlide() {
  autoSlideInterval = setInterval(() => {
    slideForward();
  }, 7000);
}
