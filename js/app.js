/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/**
 * Listens for start button clicks.
**/
document.querySelector("#btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

/**
 * Listens for onscreen keyboard clicks.
**/
document.querySelectorAll("#qwerty .key").forEach(key => {
    key.addEventListener("click", e => {
        let button = e.target;
    
        game.handleInteraction(button);
    });
});