/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Displays phrase on game board.
    **/
    addPhraseToDisplay() {
        const ul = document.querySelector("#phrase ul");

        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement("li");

            if (this.phrase[i] === " ") {
                li.classList.add("space");
                li.textContent = " ";
            } else {
                li.classList.add("hide", "letter", `${this.phrase[i]}`);
                li.textContent = `${this.phrase[i]}`;
            }

            ul.append(li);
        }
    }

    /**
     * Checks if passed letter is in phrase.
     * @param {string} letter - Letter to check.
    **/
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Displays passed letter on screen after a match is found.
     * @param {string} letter - Letter to display.
    **/
    showMatchedLetter(letter) {
        const placeholders = document.querySelectorAll("#phrase li");

        placeholders.forEach(placeholder => {
            let classes = placeholder.classList;

            if (classes.contains(letter)) {
                classes.replace("hide", "show");
            }
        });
    }
}