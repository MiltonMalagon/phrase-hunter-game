/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0; //Number of missed guesses.
        this.phrases = [
            new Phrase("Fortune favors the bold"), 
            new Phrase("Genius is eternal patience"), 
            new Phrase("Practice makes perfect"), 
            new Phrase("Knowledge is power"), 
            new Phrase("Simplicity is the ultimate sophistication")
        ]; // Array of phrase objects.
        this.activePhrase = null; // Phrase object currently in play.
    }

    /** Checked
     * Begins game by selecting a random phrase and displaying it to user. 
    **/
    startGame() {
        const overlay = document.querySelector("#overlay");
        let phrase = this.getRandomPhrase();

        overlay.style.display = "none";
        this.activePhrase = phrase;            
        phrase.addPhraseToDisplay();
    }

    /** Checked
     * Selects random phrase from phrases property.
     * @return {Object} Phrase object chosen to be used.
    **/
    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[random];
    }

    /**
     * Handles onscreen keyboard button clicks.
     * @param {HTMLButtonElement} button - The clicked button element.
     */
    handleInteraction(button) {
        let letter = button.textContent;
        let match = this.activePhrase.checkLetter(letter);

        button.disabled = true;

        if (match) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();

            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    }

    /**
     * Increases the value of the missed property.
     * Removes a life from the scoreboard.
     * Checks if player has remaining lives and ends the game if players is out.
    **/
    removeLife() {

        
    }

    /**
     * Checks for winning move.
     * @return {boolean} true if game has been won, false if game wasn't won.
    **/
    checkForWin() {
        const active_letters = this.activePhrase.phrase.replace(/\s+/gi, "").split("");
        const hidden_letters = document.querySelectorAll("#phrase li");
        const showed_letters = [];

        hidden_letters.forEach(letter => {
            if (letter.classList.contains("show")) {
                showed_letters.push(letter.textContent);
            }
        });

        if (showed_letters.length === active_letters.length) {
            // console.log(true);
            return true;
        } else {
            // console.log(false);
            return false;
        }
    }

    gameOver() {
        
    }
}