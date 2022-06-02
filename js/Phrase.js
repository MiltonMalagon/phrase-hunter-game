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

    checkLetter() {

    }

    showMatchedLetter() {
    }
}