//Random number generator 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//randomly generate rock paper or scissors by computer
//assign variables to each
//randomly choose a variable 
function computerPlay() {
    let randomNum = getRandomInt(3);
    console.log(randomNum);

    if (randomNum === 0)  {
        pcPlay = 'rock';
    }
        else if (randomNum === 1) {
            pcPlay = 'paper';
        }
            else {
                pcPlay = 'scissors';
            }
    console.log(pcPlay)
    return pcPlay;
}

//ask human for their move 
//human enters rock paper or scissors 
//make move case insensitive 
userPlay = prompt('Play your move');

computerPlay();

//compare the plays between human and computer 
    //if same tie 
if (userPlay === pcPlay) {
    alert("Tie! No winner or loser");
}
    //if rock loses paper 
else if (userPlay == 'rock' && pcPlay == "paper") {
    alert("Loser! Rock loses to paper");
}
    //if rock beats scissors 
else if (userPlay == 'rock' && pcPlay == "scissors") {
    alert("Winner! Rock beats scissors");
}
    //if scissors lose to rock 
else if (userPlay == 'scissors' && pcPlay == "rock") {
    alert("Loser! scissors loses to rock");
}
    //if scissors wins to paper
else if (userPlay == 'scissors' && pcPlay == "paper") {
    alert("Winner! scissors beats paper");
}   
    //if paper lose to scissors
else if (userPlay == 'paper' && pcPlay == "scissors") {
    alert("Loser! paper loses to scissors");
}
    //if paper wins to rock
else if (userPlay == 'paper' && pcPlay == "rock") {
    alert("Winner! paper beats rock");
} else { 
    alert("Invalid move, try again")
}
//display win or lose 











//keep count of 5 games 
