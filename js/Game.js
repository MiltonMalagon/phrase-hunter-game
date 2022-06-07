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

    handleInteraction() {
        const keyboard = document.querySelector("#qwerty");

        keyboard.addEventListener("click", e => {
            let key = e.target;

            if (key.tagName === "BUTTON" && key.className === "key") {
                let letter = key.textContent;
                
                this.activePhrase.checkLetter(letter);
            }

            this.checkForWin();
        });
    }

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
            return true;
        } else {
            return false;
        }
    }

    gameOver() {
        
    }
}