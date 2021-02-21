"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".score").textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Yoo lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
