"use strict";

const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

// Code by myself
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceCtr = document.querySelector(".dice-ctr");

current0El.textContent = 0;
current1El.textContent = 0;
score0El.textContent = 0;
score1El.textContent = 0;

btnRoll.addEventListener("click", () => {
  var randomNum = Math.ceil(Math.random() * 6);
  diceEl.src = `images/dice-${randomNum}.png`;
  diceEl.classList.remove("hidden");

  if (player1.classList.contains("player--active")) {
    current0El.textContent = parseInt(current0El.textContent) + randomNum;

    if (randomNum === 1) {
      current0El.textContent = 0;
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
    }
  } else {
    current1El.textContent = parseInt(current1El.textContent) + randomNum;

    if (randomNum === 1) {
      current1El.textContent = 0;
      player1.classList.add("player--active");
      player2.classList.remove("player--active");
    }
  }
});

btnHold.addEventListener("click", () => {
  if (player1.classList.contains("player--active")) {
    score0El.textContent = parseInt(score0El.textContent) + parseInt(current0El.textContent);
    current0El.textContent = 0;
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
  } else {
    score1El.textContent = parseInt(score1El.textContent) + parseInt(current1El.textContent);
    current1El.textContent = 0;
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
  
  if (parseInt(score0El.textContent) >= 10) {
    window.alert("Player1 won!");
    reloadPage();
  } else if(parseInt(score1El.textContent) >= 10) {
    window.alert("Player2 won!");
    reloadPage();
  }
});

function reloadPage() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
}

btnNew.addEventListener("click", reloadPage);
