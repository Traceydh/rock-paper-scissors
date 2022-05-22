//Random number generator 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//ask human for their move 
//human enters rock paper or scissors 
//make move case insensitive 
play = prompt('Play your move');
console.log(play);


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

computerPlay()





//compare the results 
    //if same tie 
    //if rock beats scissors 
    //if rock loses paper 
    //if scissors lose to rock 
    //if scissors lose to rock 
    //if paper lose to scissors
    //if paper wins to rock
//display win or lose 

//keep count of 5 games 
