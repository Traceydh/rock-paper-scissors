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
        console.log('rock');
    }
        else if (randomNum === 1) {
            console.log('paper');
        }
            else {
                console.log('scissors');
            }
}

//ask human for their move 
//human enters rock paper or scissors 
//make move case insensitive 
userPlay = prompt('Play your move');

let computerPlay = computerPlay();

//convert user play to numbers 
if (userPlay === 'rock') {
    userPlay = 0;
}
else if (userPlay === 'paper') {
    userPlay = 1;
}
else if (userPlay === 'scissors') {
    userPlay = 0;
} else { alert('Invalid move, try again')}

//compare the plays between human and computer 

    //if same tie 
    //if rock beats scissors 
    //if rock loses paper 
    //if scissors lose to rock 
    //if scissors lose to rock 
    //if paper lose to scissors
    //if paper wins to rock
//display win or lose 











//keep count of 5 games 
