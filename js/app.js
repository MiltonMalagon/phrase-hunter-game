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

document.addEventListener("keyup", e => {
    e.preventDefault();

    if (this.overlay.style.display === "none") {
        for (let key of game.keys) {
            if (key.textContent === e.key) {
                game.handleInteraction(key);
            }
        }
    }
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