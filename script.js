"use strict";

const number = document.querySelector(".number");
const message = document.querySelector(".message");
const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const highScore = document.querySelector(".highscore");

let currentScore = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

checkBtn.addEventListener("click", function () {
  const guessNumber = Number(guess.value);

  if (!guessNumber) {
    message.textContent = "No Number";
  } else if (guessNumber === secretNumber) {
    message.textContent = "Correct Number";
    number.textContent = secretNumber;
    body.style.backgroundColor = "green";
    number.style.width = "30rem";
    if (currentScore > Number(highScore.value)) {
      highScore.textContent = currentScore;
    }
  }

  if (currentScore > 0) {
    if (guessNumber > secretNumber) {
      message.textContent = "Too high!";
      updateScore();
    } else if (guessNumber < secretNumber) {
      message.textContent = "Too low!";
      updateScore();
    }
  }
});

againBtn.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = "#222";
  number.textContent = secretNumber;
  message.textContent = "Start guessing...";
  guess.value = "";
  number.style.width = "15rem";
  number.textContent = "?";
  currentScore = 20;
  score.textContent = currentScore;
});

function updateScore() {
  currentScore--;
  score.textContent = currentScore;
  if (currentScore === 0) {
    message.textContent = "You lose!";
    body.style.backgroundColor = "red";
    number.textContent = secretNumber;
  }
}
