const bookControlFont = document.querySelector(".book__control_font-size");
const bookControlColor = document.querySelector(".book__control_color");
const bookControlBack = document.querySelector(".book__control_background");
const bookContent = document.querySelector(".book__content");
const bookFontLinks = Array.from(bookControlFont.children);
const bookColor = Array.from(bookControlColor.querySelectorAll(".color"));
const contentZone = Array.from(document.querySelectorAll("p"));
const bookBackgroundSwitch = Array.from(bookControlBack.querySelectorAll("a"));

console.log(bookContent);

bookFontLinks.forEach((link) => link.addEventListener("click", clickOnLink));
function removeActiveLink() {
  bookFontLinks.forEach((link) => link.classList.remove("font-size_active"));
}
function removeActiveFont() {
  bookContent.classList.contains("font-size_small")
    ? bookContent.classList.remove("font-size_small")
    : bookContent.classList.remove("font-size_big");
}
function clickOnLink(event) {
  event.preventDefault();
  removeActiveLink();
  event.target.classList.add("font-size_active");
  if (event.target.dataset.size === "small") {
    removeActiveFont();
    bookContent.classList.add("font-size_small");
  } else if (event.target.dataset.size === "big") {
    removeActiveFont();
    bookContent.classList.add("font-size_big");
  } else removeActiveFont();
}
