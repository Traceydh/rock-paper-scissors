//Random number generator 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//randomly generate rock paper or scissors by computer
//assign variables to each
//randomly choose a variable 
function computerPlay() {
    let randomNum = getRandomInt(3);

    if (randomNum === 0)  {
        pcPlay = 'rock';
    }
        else if (randomNum === 1) {
            pcPlay = 'paper';
        }
            else {
                pcPlay = 'scissors';
            }
    return pcPlay;
}

function playRound(playerSelection, computerSelection) {
    
    //compare the plays between human and computer 
    //display win or lose 
    //if same tie 
    if (playerSelection === computerSelection) {
        alert("Tie! No winner or loser");
        console.log('Tie');
    }
        //if rock loses paper 
    else if (playerSelection == 'rock' && computerSelection == "paper") {
        alert("Computer played " + computerSelection + "\n Loser! Rock loses to paper");
        console.log('Loss');
        
    }
        //if rock beats scissors 
    else if (playerSelection == 'rock' && computerSelection == "scissors") {
        alert("Computer played " + computerSelection + "\n Winner! Rock beats scissors");
        console.log('Win');
    }
        //if scissors lose to rock 
    else if (playerSelection == 'scissors' && computerSelection == "rock") {
        alert("Computer played " + computerSelection + "\n Loser! scissors loses to rock");
        console.log('Loss');
    }
        //if scissors wins to paper
    else if (playerSelection == 'scissors' && computerSelection == "paper") {
        alert("Computer played " + computerSelection + "\n Winner! scissors beats paper");
        console.log('Win');
    }   
        //if paper lose to scissors
    else if (playerSelection == 'paper' && computerSelection == "scissors") {
        alert("Computer played " + computerSelection + "\n Loser! paper loses to scissors");
        console.log('Loss');
    }
        //if paper wins to rock
    else if (playerSelection == 'paper' && computerSelection == "rock") {
        alert("Computer played " + computerSelection + "\n Winner! paper beats rock");
        console.log('Win');
    } else { 
        alert("Invalid move, try again")
    }
    

  }


//Iterate game 5 times 
for (let i = 0; i < 5; i++) {
    //generate random computer move 
    const computerSelection = computerPlay();
    //ask human for their move 
    let playerSelectionCaseSensitive = prompt('Play your move');
    //make move case insensitive 
    let playerSelection = playerSelectionCaseSensitive.toLowerCase();
    //Execute game 
    playRound(playerSelection, computerSelection);
}



//save and display outcome 

//Count wins and losses 
//display win or losses 

