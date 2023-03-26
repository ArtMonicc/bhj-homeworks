
const dead = document.getElementById("dead");
let deadCount = 0;
const lost = document.getElementById("lost");
let lostCount = 0;

const reload = function () {
  dead.textContent = deadCount;
  lost.textContent = lostCount;
};

function returner(result) {
  alert("Вы " + result);
  deadCount = 0;
  lostCount = 0;
  reload();
  return;
}

function checkGame() {
  if (deadCount === 10) {
    result = "победили";
    returner(result);
  }
  if (lostCount === 5) {
    result = "проиграли";
    returner(result);
  }
}

function getHole(index) {
  for (let i = 1; i <= index; i++) {
    let id = document.getElementById(`hole${i}`);
    id.onclick = function () {
      if (id.classList.contains("hole_has-mole")) {
        deadCount++;
        reload();
        checkGame();
      } else {
        lostCount++;
        reload();
        checkGame();
      }
    };
  }
}
getHole(9);