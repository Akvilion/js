"use strict";
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

score0EL.textContent = 0;
score1EL.textContent = 0;
const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");
let currentScore = 0;

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");

  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
});
