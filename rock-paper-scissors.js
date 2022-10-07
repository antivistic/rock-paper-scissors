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
  document.write(result);
  return result;
}