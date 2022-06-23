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
        this.overlay = document.querySelector("#overlay");
        this.lives = Array.from(document.querySelectorAll("#scoreboard img"));
    }

    /** Checked
     * Begins game by selecting a random phrase and displaying it to user. 
    **/
    startGame() {
        let phrase = this.getRandomPhrase();

        this.overlay.style.display = "none";
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

            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    }

    /**
     * Checks for winning move.
     * @return {boolean} true if game has been won, false if game wasn't won.
    **/
     checkForWin() {
        const showed = Array.from(document.querySelectorAll("#phrase li")).filter(letter => letter.classList.contains("show"));
        const phrase = this.activePhrase.phrase.replace(/\s/g, "");

        if (showed.length === phrase.length) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Increases the value of the missed property.
     * Removes a life from the scoreboard.
     * Checks if player has remaining lives and ends the game if players is out.
    **/
    removeLife() {
        const live = this.lives.find(live => live.getAttribute("src") === "images/liveHeart.png");
        
        this.missed++;
        live.setAttribute("src", "images/lostHeart.png");

        if (this.missed >= 5) {
            this.gameOver(false);
        }
    }

    /**
     * Displays game over message.
     * @param {boolean} gameWon - Whether or not the user won the game.
     */
    gameOver(gameWon) {
        let message = this.overlay.querySelector("#game-over-message");

        this.overlay.style.display = "flex";

        if (gameWon) {
            this.overlay.className = "win";
            message.textContent = "Great job!";
            this.resetGame();       
        } else {
            this.overlay.className = "lose";
            message.textContent = "Sorry, better luck next time!";
            this.resetGame();
        }
    }

    /**
     * Resets game.
    **/
    resetGame() {
        const letters = document.querySelectorAll("#phrase li");
        const keys = document.querySelectorAll(".key");

        this.missed = 0;
        this.activePhrase = null;

        for (let letter of letters) {
            letter.remove();
        }

        for (let key of keys) {
            key.classList.remove("chosen", "wrong");
            key.removeAttribute("disabled");
        }

        for (let live of this.lives)  {
            live.setAttribute("src", "images/liveHeart.png");
        }
    }
}