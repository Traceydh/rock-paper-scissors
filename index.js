//Input user's move 
//Store user's move 
let userMove; 
//Getting button variables from html 
const userMoves = document.querySelectorAll('.button');
// store results 
const wins = document.querySelector('.wins'); 
const loses = document.querySelector('.loses'); 
const ties = document.querySelector('.tie'); 
const computerChoice = document.querySelector('.computerChoice');
const yourChoice = document.querySelector('yourChoice');
//if any button gets clicked, perform a function 
userMoves.forEach((move) => move.addEventListener('click',(e) => {
    userMove = e.target.id; 
    playRound(userMove);
}));



//variables to keep track of score 
let loss = 0;
let win = 0;
let tie = 0;


//Generate Computer's move 
//Random number generator 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function playRound(playerSelection) {
    let randomNum = getRandomInt(3);
    if (randomNum === 0)  {
        computerSelection = 'rock';
    }
    else if (randomNum === 1) {
        computerSelection = 'paper';
    }
    else {
         computerSelection = 'scissors';
    }
    //compare the plays between human and computer 
    //display win or lose 
    //if same tie 
    if (playerSelection === computerSelection) {
    }
        //if rock loses paper 
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        loss ++; 
    }
        //if rock beats scissors 
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        win ++;
    }
        //if scissors lose to rock 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        loss ++;
    }
        //if scissors wins to paper
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        win ++;
    }   
        //if paper lose to scissors
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        loss ++;
    }
        //if paper wins to rock
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        win ++;
    } else { 
        alert("Invalid move, try again")
    }

    //display results 
  console.log(userMove);
    computerChoice.textContent = computerSelection;
    wins.textContent = win;
    loses.textContent = loss;
    ties.textContent = tie;
  }

