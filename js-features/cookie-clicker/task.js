let clicker;
cookieCliker();

function cookieCliker() {
  let image = document.getElementById("cookie");
  x = document.getElementById("clicker__counter").textContent;
  x++;
  if (x % 2) {
    image.width = 100;
    image.heigth = 100;
  } else {
    image.width = 250;
    image.heigth = 250;
  }
  document.getElementById("clicker__counter").textContent = x;
}
let image = document.getElementById("cookie");
image.onclick = cookieCliker;