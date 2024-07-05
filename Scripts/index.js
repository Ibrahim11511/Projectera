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

const heroSlider = document.querySelector(".hero-slider");
const heroSliderItems = document.querySelectorAll(".slider-item");
const heroSliderPrevBtn = document.querySelector(".slider-prev-btn");
const heroSliderNextBtn = document.querySelector(".slider-next-btn");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
};

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
};

// addEventOnElements(
//   [heroSliderNextBtn, heroSliderPrevBtn],
//   "mouseover",
//   function () {
//     clearInterval(autoSlideInterval);
//   }
// );

// addEventOnElements(
//   [heroSliderNextBtn, heroSliderPrevBtn],
//   "mouseout",
//   autoSlide
// );

window.addEventListener("load", autoSlide);
