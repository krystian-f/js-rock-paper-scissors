"use strict";

// DOM
const gameWinner = document.querySelector('.js-game__match');
const roundWinner = document.querySelector('.js-game__round-winner');
const roundHumanHand = document.querySelector('.js-game__round-human')
const roundComputerHand = document.querySelector('.js-game__round-computer');
const humanScore = document.querySelector('.js-player__score');
const computerScore = document.querySelector('.js-computer__score');
const chosenHumanHand= document.querySelectorAll('.js-player__hand');
const gameInstruction = document.querySelector('.js-game__instruction');

// Functions
const checkHumanHand = function(item) {
  if(item.classList.contains('player__hand-rock')) {
    return 'rock';
  } else if(item.classList.contains('player__hand-paper')) {
    return 'paper';
  } else if(item.classList.contains('player__hand-scissors')) {
    return 'scissors';
  }
};

const generateComputerHand = function() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerHand  = undefined;

  if(randomNumber === 1) {
    computerHand = 'rock';
  } else if(randomNumber === 2) {
    computerHand = 'paper';
  } else if(randomNumber === 3) {
    computerHand = 'scissors';
  }
  return computerHand;
};

const compareHands = function() {

};

const displayRoundScore = function() {

};

const displayRoundHand = function() {

}

const compareScores = function() {

}

const displayWinner = function() {

}

const displayInstruction = function() {

}

// Events
chosenHumanHand.forEach((item) => {
  item.addEventListener('click', () =>{
    let humanHand = checkHumanHand(item);
    let computerHand = generateComputerHand();

  })
})

