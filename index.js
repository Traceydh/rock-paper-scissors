//Input user's move 
//Store user's move 
let userMove; 
//Getting button variables from html 
const userMoves = document.querySelectorAll('.button');
//if any button gets clicked, perform a function 
userMoves.forEach((move) => move.addEventListener('click',(e) => {
    userMove = e.target.id; 
    playRound(userMove);
}));

//Generate Computer's move 
//Random number generator 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//randomly generate rock paper or scissors by computer
function computerPlay() {

    return pcPlay;
}
//Compared the two moves 
//Display winner 





//variables to keep track of score 
let loss = 0;
let win = 0;

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
    console.log("computerSelection is "+computerSelection);
    console.log("user choice: " + userMove);
    //compare the plays between human and computer 
    //display win or lose 
    //if same tie 
    if (playerSelection === computerSelection) {
        alert("Tie! No winner or loser");
        console.log('Tie');
    }
        //if rock loses paper 
    else if (playerSelection == rock && computerSelection == 'paper') {
        alert("Computer played " + computerSelection + "\n Loser! Rock loses to paper");
        console.log('Loss');
        loss ++; 
        
    }
        //if rock beats scissors 
    else if (playerSelection == rock && computerSelection == 'scissors') {
        alert("Computer played " + computerSelection + "\n Winner! Rock beats scissors");
        console.log('Win');
        win ++;
    }
        //if scissors lose to rock 
    else if (playerSelection == scissors && computerSelection == 'rock') {
        alert("Computer played " + computerSelection + "\n Loser! scissors loses to rock");
        console.log('Loss');
        loss ++;
    }
        //if scissors wins to paper
    else if (playerSelection == scissors && computerSelection == 'paper') {
        alert("Computer played " + computerSelection + "\n Winner! scissors beats paper");
        console.log('Win');
        win ++;
    }   
        //if paper lose to scissors
    else if (playerSelection == paper && computerSelection == 'scissors') {
        alert("Computer played " + computerSelection + "\n Loser! paper loses to scissors");
        console.log('Loss');
        loss ++;
    }
        //if paper wins to rock
    else if (playerSelection == paper && computerSelection == 'rock') {
        alert("Computer played " + computerSelection + "\n Winner! paper beats rock");
        console.log('Win');
        win ++;
    } else { 
        alert("Invalid move, try again")
    }
  }


//Display final outcome of win or loss
 if (win > loss) {
    console.log("FINAL: WINNER! You won " + win + " times");
} else if (loss > win) {
    console.log("FINAL: LOSER! You lost " + loss + " times");
} else { console.log("FINAL: TIE no winners or losers")}
