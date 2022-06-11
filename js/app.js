/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

document.querySelector("#btn__reset").addEventListener("click", () => {
    // game = new Game();

    game.startGame();
});

document.querySelector("#qwerty").addEventListener("click", e => {
    // game = new Game();
    let key = e.target;

    if (key.className === "key" && key.tagName === "BUTTON") {
        game.handleInteraction(key);
    }
});