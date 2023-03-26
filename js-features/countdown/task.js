let timer;
countdown();
function countdown() {
  x = document.getElementById("timer").textContent;
  x--;
  document.getElementById("timer").textContent = x;
  if (x <= 0) {
    clearTimeout(timer);
    alert("Вы победили в конкурсе!");
  } else {
    timer = setTimeout(countdown, 1000);
  }
}