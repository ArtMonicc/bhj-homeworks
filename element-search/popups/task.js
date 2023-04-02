const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const items = Array.from(document.querySelectorAll(".slider__item"));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

let index = items.findIndex((item) =>
  item.classList.contains("slider__item_active")
);
let i = index;

initialLaunch(i);
arrowNext.onclick = function () {
  i = items.findIndex((item) => item.classList.contains("slider__item_active"));
  removeIndex(i);
  i < items.length - 1 ? i++ : (i = 0);
  addingActive(i);
};

arrowPrev.onclick = function () {
  i = items.findIndex((item) => item.classList.contains("slider__item_active"));
  removeIndex(i);
  i >= 1 ? i-- : (i = items.length - 1);
  addingActive(i);
};
