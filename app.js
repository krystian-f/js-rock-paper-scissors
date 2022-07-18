"use strict";

// DOM
const gameWinner = document.querySelector('.js-game__match');
const roundWinner = document.querySelector('.js-game__round-winner');
const roundHumanHand = document.querySelector('.js-game__round-human')
const roundComputerHand = document.querySelector('.js-game__round-computer');
const displayHumanScore = document.querySelector('.js-player__score');
const displayComputerScore = document.querySelector('.js-computer__score');
const chosenHumanHand= document.querySelectorAll('.js-player__hand');
const gameInstruction = document.querySelector('.js-game__instruction');
const gameHeaderDisplay = document.querySelector('.game__header');
// Global
let humanScore = 0;
let computerScore = 0;

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

const compareHands = function(human, computer) {
  let roundWinner = undefined;
  if(human === computer){
    return;
  } else if(human === 'rock' && computer === 'paper') {
    return roundWinner = 'computer';
  } else if(human === 'rock' && computer === 'scissors') {
    return roundWinner = 'human';
  } else if(human === 'paper' && computer === 'scissors') {
    return roundWinner = 'computer';
  } else if(human === 'paper' && computer === 'rock') {
    return roundWinner = 'human';
  } else if(human === 'scissors' && computer === 'rock') {
    return roundWinner = 'computer';
  } else if (human === 'scissors' && computer === 'paper') {
    return roundWinner = 'human';
  }
};

const displayRoundScore = function(winner) {
  if(winner === 'human') {
    humanScore += 1;
  } else if(winner === 'computer'){
    computerScore += 1;
  }
  displayHumanScore.innerHTML = humanScore;
  displayComputerScore.innerHTML = computerScore;
};

const displayRoundHand = function(human, computer) {
  if(human === 'rock') {
    roundHumanHand.innerHTML = `<img src="img/fist.png" alt="rock" class="player__hand-img">`;
  } else if(human === 'paper') {
    roundHumanHand.innerHTML = `<img src="img/hand.png" alt="paper" class="player__hand-img">`;
  } else if(human === 'scissors') {
    roundHumanHand.innerHTML = `<img src="img/scissors.png" alt="scissors" class="player__hand-img">`;
  }

  if(computer === 'rock') {
    roundComputerHand.innerHTML = `<img src="img/fist.png" alt="rock" class="player__hand-img">`;
  } else if(computer === 'paper') {
    roundComputerHand.innerHTML = `<img src="img/hand.png" alt="paper" class="player__hand-img">`;
  } else if(computer === 'scissors') {
    roundComputerHand.innerHTML = `<img src="img/scissors.png" alt="scissors" class="player__hand-img">`;
  }
}

const displayRoundWinner = function(winner) {
  if(winner === 'human') {
    roundWinner.innerHTML = `You've won this round`;
  } else if(winner === 'computer') {
    roundWinner.innerHTML = `Computer have won this round`;
  } else if (!winner){
    roundWinner.innerHTML = `It's a tie`;
  }
}

const compareScores = function() {
  if(humanScore >= 3 && humanScore > computerScore) {
    return 'human';
  } else if(computerScore >= 3 && computerScore > humanScore) {
    return 'computer';
  }
}

const displayWinner = function(winner) {
  if(winner){
    gameHeaderDisplay.classList.add('game__header-active');
  }

  if(winner === 'human'){
    gameWinner.innerHTML = 'Human';
  } else if(winner === 'computer') {
    gameWinner.innerHTML = 'Computer';
  }
}

const newGame = function(){
  if(humanScore >= 3 || computerScore >= 3){
    humanScore = 0;
    computerScore = 0; 
    gameHeaderDisplay.classList.remove('game__header-active');   
  }
}



// Events
chosenHumanHand.forEach((item) => {
  item.addEventListener('click', () => {
    newGame();

    let humanHand = checkHumanHand(item);
    let computerHand = generateComputerHand();
    let roundWinner = compareHands(humanHand, computerHand);
    displayRoundScore(roundWinner);
    displayRoundHand(humanHand, computerHand);
    displayRoundWinner(roundWinner);   
    let matchWinner = compareScores();
    displayWinner(matchWinner);    
  })
})

