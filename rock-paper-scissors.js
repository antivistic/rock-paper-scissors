let playerSelection;
let playerWins = 0;
let computerWins = 0;
const buttons = Array.from(document.querySelectorAll(".choiceBtn"));
buttons.forEach(choiceBtn => choiceBtn.addEventListener('click', getPlayerChoice));

function getComputerChoice() {
  let randNum = Math.random();
  let result;
  if (randNum <= (1/3)) {
  	result = "rock";
  } else if (randNum >= (2/3)) {
  	result = "paper";
  } else {
  	result = "scissors";
  }
  return result;
}

function getPlayerChoice(e) {
	playerSelection = e.target.value;
	console.log(playerSelection);
	return playerSelection.toLowerCase();
}

function singleRound(playerSelection, computerSelection) {

    if ((playerSelection === "rock" && computerSelection === "scissors")
         || (playerSelection === "paper" && computerSelection === "rock")
         || (playerSelection === "scissors" && computerSelection === "paper")
    ) {
    	    alert("You Win the Round!");
    	    playerWins++;
      } else if ((playerSelection === "rock" && computerSelection === "paper")
         || (playerSelection === "paper" && computerSelection === "scissors")
         || (playerSelection === "scissors" && computerSelection === "rock")) {
         	alert("You Lose the Round!");
         	computerWins++;
         } else if ((playerSelection === computerSelection)) {
         	alert("TIE!!!");
         } else {
         	prompt("Please try again and enter only rock, paper, or scissors (NOT case-sensative.)");
         }
}

function game() {
	for (let i = 0; i < 50; i++) {
		singleRound(getPlayerChoice(), getComputerChoice());
		if (playerWins >= 3) {
			alert("You Win the Game!");
			gameReset();
			return;
		} else if (computerWins >= 3) {
			alert("You Lose the Game!");
			gameReset();
			return;
		}
	}
}

function gameReset() {
	playerWins = 0;
	computerWins = 0;
}