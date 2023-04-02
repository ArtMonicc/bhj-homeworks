const pollTitle = document.querySelector(".poll__title");
const pollAnswersBlock = document.getElementById("poll__answers");
const voteResults = document.querySelector(".vote-results");

let xhr = new XMLHttpRequest();
let requestURL = "https://students.netoservices.ru/nestjs-backend/poll";
xhr.open("GET", requestURL);
xhr.responseType = "json";
xhr.addEventListener("load", () => {
  let answers = xhr.response.data.answers;
  let title = xhr.response.data.title;

  for (let i = 0; i < answers.length; i++) {
    pollTitle.innerHTML = title;
    pollAnswersBlock.innerHTML += `<button class="poll__answer">${answers[i]}</button>`;
  }
  pollAnswersBlock.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("poll__answer")) {
      let answerText = target.textContent.trim();
      let answerIndex = answers.indexOf(answerText);
      let voteId = xhr.response.id;
      alert("Спасибо, ваш голос засчитан!");
      revealTheTruth(voteId, answerIndex);
    }
  });
});
xhr.send();