/* Paper Rock Scissors v1.0
 * Written by Robert MacDomnald
 * Started July 12 2022
 * Updated July 19 2022
 *
 * Updated with UI!
 * Player Selection works (fix bug with selecting out of turn).
 * Need to implement computer turn.
 */

let playerValue = 0;
let computerValue = 0;
let playerScore = 0;
let computerScore = 0;

do {
  beginGame();
  startPlayerTurn();
} while (playerScore < 5 && computerScore < 5);

function beginGame() {
  introText("intro-welcome");
  setTimeout(() => {
    introText("intro-players");
  }, 1000);
  setTimeout(() => {
    introText("intro-rules");
  }, 2000);
  setTimeout(() => {
    document.getElementById("intro-weapons").style.opacity = "100%";
  }, 3000);
  setTimeout(() => {
    document.getElementById("player-icons").style.opacity = "100%";
  }, 4000);
}

// This function will fade-in and out the text of the passed-in id.
// intended for the opening intro text.
function introText(text) {
  document.getElementById(text).style.opacity = "100%";
  setTimeout(() => {
    document.getElementById(text).style.opacity = "0%";
  }, 5000);
}

function startPlayerTurn() {
  let inputs = document.querySelectorAll(".player-image");
  inputs.forEach((input) => {
    input.addEventListener("mouseenter", () => {
      input.classList.toggle("mouse-over");
      input.classList.toggle("no-mouse-over");
    });
    input.addEventListener("mouseleave", () => {
      input.classList.toggle("mouse-over");
      input.classList.toggle("no-mouse-over");
    });
    input.addEventListener("click", function endPlayerTurn() {
      playerValue = input.value;
      selectText = document.getElementById("intro-weapons");
      selectText.textContent = "You picked:";
      let hideIcons = document.querySelectorAll(".no-mouse-over");
      hideIcons.forEach((icon) => {
        icon.style.opacity = "0%";
      });
      let selectedIcon = document.querySelector(".mouse-over");
      if (selectedIcon) {
        selectedIcon.style.opacity = "100%";
      }
      playerTurn = false;
      document.getElementById("computer-icons").style.opacity = "100%";
      setTimeout(() => {
        startComputerTurn();
      }, 3000);
    });
  });
}
function startComputerTurn() {
  computerValue = randomInt(1, 3);
  console.log(computerValue);
  switch (computerValue) {
    case 1:
      document.getElementById("computer-paper").style.opacity = "0%";
      document.getElementById("computer-scissors").style.opacity = "0%";
      break;
    case 2:
      document.getElementById("computer-rock").style.opacity = "0%";
      document.getElementById("computer-scissors").style.opacity = "0%";
      break;
    case 3:
      document.getElementById("computer-rock").style.opacity = "0%";
      document.getElementById("computer-paper").style.opacity = "0%";
      break;
    default:
      alert("Something went wrong.");
      break;
  }
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
