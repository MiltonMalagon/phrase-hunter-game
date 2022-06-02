/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0; //Number of missed guesses.
        this.phrases = [
            new Phrase("By the Power of Greyskull"), 
            new Phrase("Eat My Shorts"), 
            new Phrase("Cowabunga"), 
            new Phrase("Whats Up Doc"), 
            new Phrase("To Infinity and Beyond")
        ]; // Array of phrase objects.
        this.activePhrase = null; // Phrase object currently in play.
    }

    startGame() {

    }

    /**
     * Selects random phrase from phrases property.
     * @return {Object} Phrase object chosen to be used.
    **/
    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[random];
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