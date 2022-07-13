/* Paper Rock Scissors v1.0
 * Written by Robert MacDomnald
 * Started July 12 2022
 * Updated July 13 2022
 *
 * Pseudocode:
 * Declare globals.
 * Computer picks random number: 1 - 3, where 1 = Paper, 2 = Rock, 3 = Scissors.
 * Players turn: prompt for input (case insensitive), must be 'paper', 'rock', or 'scissors'.
 * Compare inputs to determine winner.
 * Output the results.
 * Repeat the above 5 times, record the results of each round.
 * Output the final results, and winner.
 */

// Declare globals:
let round = 1;
let computerScore = 0;
let playerScore = 0;
do {
  let computerPicks;
  let computerValue;
  let playerPicks;
  let playerValue;

  // Computer picks random number: 1 - 3, where 1 = Paper, 2 = Rock, 3 = Scissors.
  computerValue = parseInt(getRandomInt(1, 3));

  // Players turn: prompt for input (case insensitive), must be 'paper', 'rock', or 'scissors'.
  do {
    playerPicks = prompt(
      `Round ${round}!\nType your next move: paper, rock, or scissors`,
      ""
    );
    playerPicks = playerPicks.toLowerCase();
  } while (
    playerPicks != "paper" &&
    playerPicks != "rock" &&
    playerPicks != "scissors"
  );

  // Compare inputs to determine winner.
  if (playerPicks == "paper") {
    if (computerValue == 1) {
      console.log(
        `Round ${round}:\nComputer picks paper.\nPlayer picks paper.\nTie.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    } else if (computerValue == 2) {
      playerScore++;
      console.log(
        `Round ${round}:\nComputer picks rock.\nPlayer picks paper.\nYou win.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    } else if ((computerValue = 3)) {
      computerScore++;
      console.log(
        `Round ${round}:\nComputer picks scissors.\nPlayer picks paper.\nComputer wins.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    }
  } else if (playerPicks == "rock") {
    if (computerValue == 1) {
      computerScore++;
      console.log(
        `Round ${round}:\nComputer picks paper.\nPlayer picks rock.\nComputer Wins.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    } else if (computerValue == 2) {
      console.log(
        `Round ${round}:\nComputer picks rock.\nPlayer picks rock.\nTie.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    } else if ((computerValue = 3)) {
      playerScore++;
      console.log(
        `Round ${round}:\nComputer picks scissors.\nPlayer picks rock.\nYou win.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    }
  } else if (playerPicks == "scissors") {
    if (computerValue == 1) {
      playerScore++;
      console.log(
        `Round ${round}:\nComputer picks paper.\nPlayer picks scissors.\nYou win.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    } else if (computerValue == 2) {
      computerScore++;
      console.log(
        `Round ${round}:\nComputer picks rock.\nPlayer picks scissors.\nComputer wins.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    } else if ((computerValue = 3)) {
      console.log(
        `Round ${round}:\nComputer picks scissors.\nPlayer picks scissors.\nTie.\nComputer: ${computerScore} - Player: ${playerScore}`
      );
    }
  } else {
    console.log("ERROR: PLAYER VALUE OUT OF BOUNDS!");
  }

  // Output the results:
  // console.log("Computer selected: " + computerPicks);
  // console.log("You have selected: " + playerPicks);

  // Repeat the above until one side has 5 points, record the results of each round:
  round++;
} while (computerScore < 5 && playerScore < 5);

// Output the final results, and winner:
console.log(
  `Rounds played: ${round}\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`
);
if (computerScore > playerScore) {
  console.log("Computer wins!");
} else if (playerScore > computerScore) {
  console.log("Player wins!");
} else {
  // Should be impossible:
  console.log("Tie game");
}

// Random Number Function provided by https://www.w3schools.com/js/js_random.asp:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
