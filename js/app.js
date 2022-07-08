/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/**
 * Listens to start button clicks.
**/
document.querySelector("#btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

/**
 * Listens to mouse hover and onscreen keyboard clicks.
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
 * Listens to keystrokes.
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