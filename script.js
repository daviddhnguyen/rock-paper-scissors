function getComputerChoice() {
	let computerSelection = Math.floor(Math.random()*3 + 1);
  /* Assigns random int number between 1 - 3 as the computer choice. */
  console.log(computerSelection);
  switch (computerSelection) {
    case 1:
    	computerSelection = 'Rock';
    	console.log(computerSelection);
    	break;
    case 2:
      computerSelection = 'Paper';
    	console.log(computerSelection);
    	break;
    case 3:
    	computerSelection = 'Scissors';
    	console.log(computerSelection);
    	break;
  }
}

getComputerChoice()