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
    key.addEventListener("mouseover", e => {
        let button = e.target;

        button.classList.add("button-hover"); 
    });

    key.addEventListener("mouseout", e => {
        let button = e.target;

        button.classList.remove("button-hover"); 
    });

    key.addEventListener("click", e => {
        let button = e.target;

        game.handleInteraction(button);
    });
});

/**
 * Listens for keystrokes.
**/
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