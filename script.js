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

function formatText(text) {
    //get first letter of text
    let textFirstLetter = text.charAt(0);
    //Capitalize first letter
    textFirstLetter = textFirstLetter.toUpperCase();
    //get remaining letters after first letter
    let remainingLetters = text.slice(1)
    //format text to all lowercase to account to make case-insensitve
    let remainingLettersLower = remainingLetters.toLowerCase();
    return textFirstLetter.concat(remainingLettersLower);
}

function playRound(playerSelection, computerSelection) {

    let playerSelectionFormatted = formatText(playerSelection);

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

let playerSelection = document.querySelectorAll('button');

playerSelection.forEach((item) => {
        //console.log(playRound(playerSelection.textContent, getComputerChoice));
        item.addEventListener('click', () => 
        console.log(playRound(item.textContent,getComputerChoice())));
});