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
    console.log("Computer: " + computerSelection);
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

    console.log("Player: " + playerSelectionFormatted)

    /*compares player vs computer
    if player did not put rock paper or scissor give error to try again*/
    if (playerSelectionFormatted == computerSelection) {
        return "tied";
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
        return "Input error";
    }
}

/* test code
const playerSelection = "rOCk";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

function game() {
    /*create best-of-five game and keep score. 
    Report winner or loser once player or computer reaches 5*/
    let pointsToWin = 5;
    let playerScore = 0;
    let computerScore = 0;



    while (playerScore < pointsToWin && computerScore < pointsToWin) {

        console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`)

        let playerSelection = prompt("Enter Rock, Paper, or Scissors to play!")
        switch (playRound(playerSelection,getComputerChoice())) {
            case "tied":
                console.log("You tied!- Play again!");
                break;
            case "Computer won!":
                console.log("Computer won this round!");
                computerScore += 1;
                if (computerScore == pointsToWin) {
                    console.log("Computer wins the game!");
                    return
                }
                break;
            case "You won!":
                console.log("You won this round!");
                playerScore += 1;
                if (playerScore == pointsToWin) {
                    console.log("You win the game!");
                    return
                }
                break;
            case "Input error":
                console.log("Improper input, please enter Rock, Paper or Scissors.");
                break;
        }
    }
}

game()