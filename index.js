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
userPlayCaseSensitive = prompt('Play your move');

//make move case insensitive 
userPlay = userPlayCaseSensitive.toLowerCase();

computerPlay();

//compare the plays between human and computer 
//display win or lose 
    //if same tie 
if (userPlay === pcPlay) {
    alert("Tie! No winner or loser");
}
    //if rock loses paper 
else if (userPlay == 'rock' && pcPlay == "paper") {
    alert("Computer played " + pcPlay + "\n Loser! Rock loses to paper");
}
    //if rock beats scissors 
else if (userPlay == 'rock' && pcPlay == "scissors") {
    alert("Computer played " + pcPlay + "\n Winner! Rock beats scissors");
}
    //if scissors lose to rock 
else if (userPlay == 'scissors' && pcPlay == "rock") {
    alert("Computer played " + pcPlay + "\n Loser! scissors loses to rock");
}
    //if scissors wins to paper
else if (userPlay == 'scissors' && pcPlay == "paper") {
    alert("Computer played " + pcPlay + "\n Winner! scissors beats paper");
}   
    //if paper lose to scissors
else if (userPlay == 'paper' && pcPlay == "scissors") {
    alert("Computer played " + pcPlay + "\n Loser! paper loses to scissors");
}
    //if paper wins to rock
else if (userPlay == 'paper' && pcPlay == "rock") {
    alert("Computer played " + pcPlay + "\n Winner! paper beats rock");
} else { 
    alert("Invalid move, try again")
}












//keep count of 5 games 
