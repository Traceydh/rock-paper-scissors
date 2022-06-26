//Input user's move 
//Store user's move 
let userMove; 
//Getting button variables from html 
const userMoves = document.querySelectorAll('.button');
// store results 
const humanScore = document.querySelector('.human-score');
const computerScore = document.querySelector('.computer-score');
const displayRound = document.querySelector('.display-round');
const computerChoice = document.querySelector('.computerChoice');
const humanChoice = document.querySelector('.humanChoice');
const yourChoice = document.querySelector('yourChoice');

//create element image to what player and computer chose 
const imgComputer = document.createElement("img");
computerChoice.append(imgComputer);
const imgHuman = document.createElement("img");
humanChoice.append(imgHuman);

//create element that pops up when someone wins 5 times 
const finalResults = document.createElement("div"); 
finalResults.classList.add("final-results");

//create element in JS
//add class
//use class to style 
//add text 
//append div to page 

//if any button gets clicked, perform a function 
userMoves.forEach((move) => move.addEventListener('click',(e) => {
    userMove = e.target.id; 
    switch (userMove) {
        case 'paper': 
            imgHuman.src = 'paper.png';
            break
        case 'rock':
            imgHuman.src = 'rock.png';
            break
        case 'scissors':
            imgHuman.src = 'scissors.png';
            break
    }
    playRound(userMove);
}));

//variables to keep track of score 
let humanWins = 0;
let computerWins = 0;

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

    //display what the computer chose 
    switch (randomNum) {
        case 0:
            imgComputer.src = "rock.png"
            break
        case 1:
            imgComputer.src = "paper.png";
            break
        case 2: 
        imgComputer.src = "scissors.png";
            break
    }

    //compare results to determine winner or loser 
    switch (playerSelection + computerSelection) {
        case 'rockpaper':
        case 'scissorspaper': 
        case 'paperscissors':
            computerWins ++;
            displayRound.textContent = 'You lost ...';
            break;
        case 'paperrock':
        case 'paperscissors':
        case 'scissorspaper':
            humanWins ++
            displayRound.textContent = 'You won !!!';
            break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            displayRound.textContent = 'It\'s a tie';
            break;
    }

        //stop the game when someone wins 5 times 
        if (humanWins == 5) {
            //pop up you won! replay? 
            alert('You won! play again');
            humanWins = 0;
            computerWins = 0;
            
        } else if (computerWins == 5) {
            alert('You lost... play again');
            humanWins = 0;
            computerWins = 0;
        }
        
    //Display the result of this round 
    humanScore.textContent = 'Wins: ' + humanWins;
    computerScore.textContent = 'Wins: ' + computerWins;
  }


