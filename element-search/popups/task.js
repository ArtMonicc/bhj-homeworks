const modalMain = document.querySelector("#modal_main");
const modalSuccess = document.querySelector("#modal_success");
const successButton = document.querySelector(".show-success");
const closeButtons = document.querySelectorAll(".modal__close");

modalMain.classList.add("modal_active");

Array.from(closeButtons).forEach(
  (btn) =>
    (btn.onclick = () => btn.closest(".modal").classList.remove("modal_active"))
);

successButton.onclick = () => {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
};
