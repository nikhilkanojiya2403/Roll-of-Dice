'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScore, playerScore, activeScore, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;

  currentScore = 0;
  playerScore = [0, 0];
  activeScore = 0;
  playing = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activeScore}`).textContent = 0;
  activeScore === 0 ? (activeScore = 1) : (activeScore = 0);
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (playing) {
    let n = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${n}.png`;
    if (n === 1) {
      switchPlayer();
    } else {
      currentScore += n;
      document.getElementById(`current--${activeScore}`).textContent =
        currentScore;
    }
  }
});

holdDice.addEventListener('click', function () {
  if (playing) {
    playerScore[activeScore] += currentScore;
    document.getElementById(`score--${activeScore}`).textContent =
      playerScore[activeScore];
    if (playerScore[activeScore] >= 20) {
      console.log('kkkk');
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activeScore}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activeScore}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener('click', init);
