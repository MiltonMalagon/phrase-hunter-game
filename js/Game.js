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
    }

    /** Checked
     * Begins game by selecting a random phrase and displaying it to user. 
    **/
    startGame() {
        // const overlay = document.querySelector("#overlay");
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
        // console.log(button);

        if (match) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            // this.checkForWin();

            if (this.checkForWin()) {
                this.gameOver(true);
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
        const lives = Array.from(document.querySelectorAll("#scoreboard img"));
        const live = lives.find(live => live.getAttribute("src") === "images/liveHeart.png");
        
        this.missed++;
        live.setAttribute("src", "images/lostHeart.png");

        if (this.missed >= 5) {
            this.gameOver(false);
        }
    }

    /**
     * Checks for winning move.
     * @return {boolean} true if game has been won, false if game wasn't won.
    **/
    checkForWin() {
        const showed = Array.from(document.querySelectorAll("#phrase li"))
        .filter(letter => letter.classList.contains("show"));
        const phrase = this.activePhrase.phrase.replace(/\s/g, "");

        if (showed.length === phrase.length) {
            return true;
        } else {
            return false;
        }

        // --------------------------------------
        // const phrase = this.activePhrase.phrase.length;
        // const placeholders = Array.from(document.querySelectorAll("#phrase li"));
        // const showed = placeholders.filter(placeholder => placeholder.classList.contains("show"));

        // --------------------------------------
        // const active_letters = this.activePhrase.phrase.replace(/\s+/gi, "").split("");
        // const hidden_letters = document.querySelectorAll("#phrase li");
        // const showed_letters = [];

        // hidden_letters.forEach(letter => {
        //     if (letter.classList.contains("show")) {
        //         showed_letters.push(letter.textContent);
        //     }
        // });

        // if (showed_letters.length === active_letters.length) {
        //     console.log(true);
        //     return true;
        // } else {
        //     console.log(false);
        //     return false;
        // }
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
        } else {
            this.overlay.className = "lose";
            message.textContent = "Sorry, better luck next time!"
        }
    }
}