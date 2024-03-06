let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const playerSelection = () => {
  let playerHand = prompt("Rock, Paper, or Scissors?").toLocaleLowerCase();
  if (
    playerHand === "rock" ||
    playerHand === "paper" ||
    playerHand === "scissors"
  ) {
    return playerHand;
  } else {
    alert("Invalid input. Please try again.");
    return playerSelection();
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    console.log(
      "round: " +
        (i + 1) +
        " " +
        playRound(playerSelection(), getComputerChoice())
    );

    // check in game 3
    if (i === 2) {
      if (playerScore === 3) {
        console.log(
          "You win the game! score: " + playerScore + " - " + computerScore
        );
        break;
      } else if (computerScore === 3) {
        console.log(
          "You lose the game! score: " + playerScore + " - " + computerScore
        );
        break;
      }
    }

    // check in game 4
    if (i === 3) {
      if (playerScore - computerScore === 2) {
        console.log(
          "You win the game! score: " + playerScore + " - " + computerScore
        );
        break;
      } else if (computerScore - playerScore === 2) {
        console.log(
          "You lose the game! score: " + playerScore + " - " + computerScore
        );
        break;
      }
    }

    // check in game 5
    if (i === 4) {
      if (playerScore > computerScore) {
        console.log(
          "You win the game! score: " + playerScore + " - " + computerScore
        );
      } else if (playerScore < computerScore) {
        console.log(
          "You lose the game! score: " + playerScore + " - " + computerScore
        );
      } else {
        console.log(
          "It's a tie! score: " + playerScore + " - " + computerScore
        );
      }
    }
  }
};

playGame();
