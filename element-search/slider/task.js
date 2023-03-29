const slider = Array.from(document.querySelectorAll(".slider__item"));
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
let slideId = 0;

next.onclick = () => {
  slider[slideId].classList.remove("slider__item_active");
  if (slideId === slider.length - 1) {
    slideId = 0;
  } else {
    slideId++;
  }
  slider[slideId].classList.add("slider__item_active");
};

prev.onclick = () => {
  slider[slideId].classList.remove("slider__item_active");
  if (slideId === 0) {
    slideId = slider.length - 1;
  } else {
    slideId--;
  }
  slider[slideId].classList.add("slider__item_active");
};
