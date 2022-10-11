let playerSelection;
let playerWins = 0;
let computerWins = 0;
let optionBtns = document.getElementById("choiceBox");
let beginBtn = document.getElementById("startBtn");
const buttons = Array.from(document.querySelectorAll(".choiceBtn"));
const strBtn = document.querySelector("#startBtn");
strBtn.addEventListener('click', startGame);
buttons.forEach(choiceBtn => choiceBtn.addEventListener('click', game));

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

function singleRound(playerSelection, computerSelection) {
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection)
    if ((playerSelection === "rock" && computerSelection === "scissors")
         || (playerSelection === "paper" && computerSelection === "rock")
         || (playerSelection === "scissors" && computerSelection === "paper")
    ) {
    	    alert("You Win the Round!");
    	    playerWins++;
    	    document.getElementById('player-score').innerHTML = `<p>${playerWins}</p>`
      } else if ((playerSelection === "rock" && computerSelection === "paper")
         || (playerSelection === "paper" && computerSelection === "scissors")
         || (playerSelection === "scissors" && computerSelection === "rock")) {
         	alert("You Lose the Round!");
         	computerWins++;
         	document.getElementById('computer-score').innerHTML = `<p>${computerWins}</p>`
         } else if ((playerSelection === computerSelection)) {
         	alert("TIE!!!");
         }
}

function game(e) {
	singleRound(event.target.value, getComputerChoice());
		if (playerWins >= 3) {
			alert("You Won the Game!");
			gameReset();
			return;
		} else if (computerWins >= 3) {
			alert("You Lost the Game!");
			gameReset();
			return;
		}
	}

function gameReset() {
	playerWins = 0;
	computerWins = 0;
    optionBtns.style.display = "none";
    beginBtn.style.display = "inline-block";
    document.getElementById('player-score').innerHTML = `<p>0</p>`
    document.getElementById('computer-score').innerHTML = `<p>0</p>`
}

function startGame() {
	optionBtns.style.display = "inline-block";
	beginBtn.style.display = "none";
}