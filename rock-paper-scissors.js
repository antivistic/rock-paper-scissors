function getComputerChoice() {
  let randNum = Math.random();
  let result;
  if (randNum <= 0.333) {
  	result = "rock";
  } else if (randNum >= 0.666) {
  	result = "paper";
  } else {
  	result = "scissors";
  }
  return result;
}

function singleRound(playerSelection, computerSelection) {

    if ((playerSelection === "rock" && computerSelection === "scissors")
         || (playerSelection === "paper" && computerSelection === "rock")
         || (playerSelection === "scissors" && computerSelection === "paper")
    ) {
    	alert("You Win!!");
      } else if ((playerSelection === "rock" && computerSelection === "paper")
         || (playerSelection === "paper" && computerSelection === "scissors")
         || (playerSelection === "scissors" && computerSelection === "rock")) {
         	alert("You Lose!!");
         } else {
         	alert ("TIE!!!");
         }
}