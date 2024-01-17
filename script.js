function getComputerChoice() {
    let computerSelection = Math.floor(Math.random()*3 + 1);
  /* Assigns random int number between 1 - 3 as the computer choice. */
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
    } 
    console.log(computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    /*change playerSelection to lower case*/
    let playerSelectionLower = playerSelection.toLowerCase();
    /*Seperate the first letter and capitalize*/
    let firstLetter = playerSelectionLower.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    /*slice remaining letters after first letter and concat with Uppercase first letter*/
    let remainingLetters = playerSelectionLower.slice(1);
    let playerSelectionFormatted = firstLetter.concat(remainingLetters);

    console.log(playerSelectionFormatted)

    /*check to make sure player put rock paper or scissors */
    if (playerSelectionFormatted == computerSelection) {
        return "You tied!- Play again!";
    } else if (playerSelectionFormatted == "Rock") {
        switch (computerSelection) {
            case "Paper":
                return "Computer won!";
                break;
            case "Scissors":
                return "You won!";
                break;
        }
    } else if (playerSelectionFormatted == "Paper") {
        switch (computerSelection) {
            case "Scissors":
                return "Computer won!";
                break;
            case "Rock":
                return "You won!";
                break;
        }  
    } else if (playerSelectionFormatted == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                return "Computer won!";
                break;
            case "Paper":
                return "You won!";
                break;
        }  
    } else {
        return "Improper input, please enter Rock, Paper or Scissors.";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));