# Phrase Hunter Game
## Browser-based word guessing game
### Techdegree Project 4

### General description
The "Phrase Hunter" game use OOP to select a random phrase which the player will try to guess by clicking keys on an onscreen keyboard or an actual keyboard.

### Game classes
The game's interaction is made up of two classes and an application file to start the game and handle interaction.

#### 1. Game class
The Game class contains methods for starting and ending the game, and handling interactions.

- Class properties (constructor):

    - "missed" - Tracks the number of missed guesses by the player.
    - "phrases" - Array of Phrase objects.
    - "activePhrase" - Phrase object currently in play.
    - "overlay" - Start screen overlay.
    - "keys" - Oncreen keyboard keys.
    - "lives" - Scoreboard hearts.

- Class methods:

    - **startGame**
        Begins game by selecting a random phrase and displaying it to user.

    - **getRandomPhrase**
        Selects random phrase from phrases property.
        *Returns* {Object} Phrase object chosen to be used.

    - **handleInteraction**
        Handles onscreen keyboard button clicks.
        *Parameter* {HTMLButtonElement} Clicked button element.

    - **checkForWin**
        Checks for winning move.
        *Returns* {Boolean} Value if game has been won or if wasn't.

    - **removeLife**
        Increases the value of the missed property.
        Removes a life from the scoreboard.
        Checks if player has remaining lives and ends the game if players is out.

    - **gameOver**
        Displays game over message.
        *Parameter* {Boolean} Value if whether or not the user won the game.

    - **resetGame**
        Resets game after game is completed.

#### 2. Phrase class
The Phrase class handles the creation of phrases.

- Class properties (constructor):

    - "phrase" - Actual phrase the Phrase object is representing.

- Class methods:

    - **addPhraseToDisplay**
        Displays phrase on the game board.

    - **checkLetter**
        Checks if passed letter is in phrase.
        *Parameter* {String} Letter to check.

    - **showMatchedLetter**
        Displays passed letter on screen after a match is found.
        *Parameter* {String} Letter to display.

#### 3. App file
The app file starts the game and listens to click and keystroke interactivities.

- Start button listener:

    - **click event**
        Listens to start button clicks.

- Onscreen keys listeners:

    - **mouse over event** & **mouse out event**
        Listen to hover behavior and apply styles.

    - **click event**
        Listens to keyboard clicks and handles interaction.

- Onscreen keys listeners:

    - **keyup event**
        Listens to keystrokes and handles interaction.

#### Extra
Custom CSS styles.

- Color styles:

    - "phrase" - Actual phrase the Phra
