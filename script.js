/* Paper Rock Scissors v1.0
 * Written by Robert MacDomnald
 * Started July 12 2022
 * Updated July 18 2022
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

const images = document.querySelectorAll(".image");
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
