let computerSelection

function getComputerChoice() {
    computerSelection = Math.floor(Math.random()*3 + 1);
  /* Assigns random int number between 1 - 3 as the computer choice. */
    console.log(computerSelection);
    switch (computerSelection) {
        case 1:
    	    computerSelection = 'Rock';
    	    break;
        case 2:
            computerSelection = 'Paper';
            break;
        case 3:
            computerSelection = 'Scissors';
    	    break;
    return computerSelection
  }
}

getComputerChoice()
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    /*change playerSelection to lower case*/
    let playerSelectionLower = playerSelection.toLowerCase();
    /*Seperate the first letter and capitalize*/
    let firstLetter = playerSelectionLower.charat(0);
    firstLetter = firstLetter.toUpperCase();
    /*slice remaining letters after first letter and concat with Uppercase first letter*/
    let remainingLetters = playerSelectionLower.slice(1);
    let playerSelectionFormatted = concat(firstLetter,remainingLetters);

    console.log(playerSelectionFormatted)

    }