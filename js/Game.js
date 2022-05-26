/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0; //Number of missed guesses.
        this.phrases = [
            new Phrase("Every man is guilty of all the good he did not do"), 
            new Phrase("The future belongs to those who prepare for it today"), 
            new Phrase("The only impossible journey is the one you never begin"), 
            new Phrase("I have no special talent. I am only passionately curious"), 
            new Phrase("May you live all the days of your life")
        ]; // Array of phrase objects.
        this.activePhrase = null; // Phrase object currently in play.
    }

    startGame() {

    }

    getRandomPhrase() {
        let random = Math.Math.random() * this.phrases.length;
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {
        
    }
}