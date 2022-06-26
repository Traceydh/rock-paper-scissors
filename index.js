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
const humanChoice = document.querySelector('.humanChoice');
const yourChoice = document.querySelector('yourChoice');
const won = document.querySelector('#won');
const lost = document.querySelector('#lost');

//create element image 
const imgComputer = document.createElement("img");
computerChoice.append(imgComputer);
const imgHuman = document.createElement("img");
humanChoice.append(imgHuman);

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
    //compare results to determine winner or loser 
    switch (playerSelection + computerSelection) {
        case 'rockpaper':
        case 'scissorspaper': 
        case 'paperscissors':
            loss ++;
            break;
        case 'paperrock':
        case 'paperscissors':
        case 'scissorspaper':
            win ++
            break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            tie ++
            break;
    }

    //display results 
    //Select div that will house image 
    //display image that computer chooses 
    let displayPcResults; 
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
  }

