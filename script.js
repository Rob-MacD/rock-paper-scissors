/* Paper Rock Scissors v1.0
 * Written by Robert MacDomnald
 * Started July 12 2022
 * Updated July 18 2022
 *
 * Updated with UI!
 * Player Selection works (fix bug with selecting out of turn).
 * Need to implement computer turn.
 */

let playerValue = 0;
let computerValue = 0;
let playerTurn = false;
let images = document.querySelectorAll(".image");

beginGame();

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
  startPlayerTurn();
}

// This function will fade-in and out the text of the passed-in id.
// intended for the opening intro text.
function introText(text) {
  document.getElementById(text).style.opacity = "100%";
  setTimeout(() => {
    document.getElementById(text).style.opacity = "0%";
  }, 5000);
}

function playRound() {
  console.log("GAME PLAY");
}

function startPlayerTurn() {
  images = document.querySelectorAll(".no-mouse-over");
  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.classList.toggle("mouse-over");
      image.classList.toggle("no-mouse-over");
    });
    image.addEventListener("mouseleave", () => {
      image.classList.toggle("mouse-over");
      image.classList.toggle("no-mouse-over");
    });
  });
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    selectText = document.getElementById("intro-weapons");
    selectText.textContent = "You picked:";
    // hide unselected icons:
    endPlayerTurn();
    let playerIcons = document.querySelectorAll(".no-mouse-over");
    playerIcons.forEach((icon) => {
      console.log(icon.id);
      icon.style.opacity = "0%";
    });
    document.querySelector(".mouse-over").style.opacity = "100%";
    playerValue = input.id;
    playerTurn = false;
    //Bring in CPU icons:
    document.getElementById("computer-icons").style.opacity = "100%";
  });
});
