/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.querySelector("#btn__reset").addEventListener("click", () => {
    game = new Game();

    game.startGame();
});

// const random_phrase = game.getRandomPhrase();
// const phrase = new Phrase(random_phrase.phrase);

// phrase.addPhraseToDisplay();

// game.startGame();
// game.handleInteraction();