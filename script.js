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

let pointsToWin = 5;
let playerScore = 0;
let computerScore = 0;

let playerSelection = document.querySelectorAll('button');
  
playerSelection.forEach((item) => {
          //console.log(playRound(playerSelection.textContent, getComputerChoice));
        item.addEventListener('click', () => {
          if (playerScore >= pointsToWin || computerScore >= pointsToWin) {
            playerScore = 0;
            computerScore = 0;
          }
          
          switch (playRound(item.textContent,getComputerChoice())) {
              case "tied":
                results = `You tied!- Play again!\n
                Current Score - Player: ${playerScore} vs Computer: ${computerScore}`;
                break;
              case "Computer won!":
                computerScore += 1;
                if (computerScore == pointsToWin) {
                  alert(`You lost to the computer!\nPlayer: ${playerScore} vs Computer: ${computerScore}`);
                  break;
                }
                results = `Computer won this round!\n
                Current Score - Player: ${playerScore} vs Computer: ${computerScore}`;
                break;
              case "You won!":
                playerScore += 1;
                  if (playerScore == pointsToWin) {
                      alert(`You beat the computer!\nPlayer: ${playerScore} vs Computer: ${computerScore}`);
                    break;
                  }
                results = `You won this round!\n
                Current Score - Player: ${playerScore} vs Computer: ${computerScore}`;
                break;
            }
            
            const content = document.querySelector('.content');

            const msg = document.createElement('div');
            const resultsText = document.createTextNode(results);
            msg.appendChild(resultsText);

            content.innerHTML = msg.innerHTML;
          });
});
