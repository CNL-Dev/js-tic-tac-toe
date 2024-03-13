
// Gameboard factory
function createGameboard (name, player1, player2) {
    const gameName = name;
    let gameboard = [['', '', ''],
                    ['', '', ''],
                    ['', '', '']];
    const gameboardPlayer1 = player1;
    const gameboardPlayer2 = player2;

    let turn = 0;
    let gameWon = false;
    const getTurn = () => turn;
    const increaseTurn = () => turn++;
    const getGameboard = () => gameboard;
    const getPlayerInput = (inputX, inputY, playerMarker) => {
        if(gameboard[inputX][inputY] == '') {
            gameboard[inputX][inputY] = playerMarker;
            increaseTurn();
        }
        else {
            console.error("You must select an empty cell!")
        }
    };

    const checkWinConditions = () => {
        // Check rows
        for(r = 0; r < 3; r++) {
            if(gameboard[r][0] == gameboard[r][1] &&
               gameboard[r][1] ==  gameboard[r][2] && 
               gameboard[r][0] != '') return true;
        }

        // Check columns
        for(c = 0; c < 3; r++) {
            if(gameboard[0][c] == gameboard[1][c] &&
               gameboard[1][c] ==  gameboard[2][c] && 
               gameboard[0][c] != '') return true;
        }

        // Check diagonals
        if(gameboard[0][0] == gameboard[1][1] &&
           gameboard[1][1] == gameboard[2][2] &&
           gameboard[0][0] != '') return true;

        if(gameboard[0][2] == gameboard[1][1] &&
           gameboard[1][1] == gameboard[2][0] &&
           gameboard[2][0] != '') return true;

        // No winner found
        return false;
    };

    const playRound = () => {
        if(!gameWon) {
            // Player 1 goes on even turns, 
            // player 2 on odd turns.
            if(turn % 2 == 0) {
                getPlayerInput(prompt("Please select a row:") ,
                prompt("Please select a column:"),
                gameboardPlayer1.getMarker());
            } else {
                getPlayerInput(prompt("Please select an empty cell:"),
                prompt("Please select a column:"),
                gameboardPlayer2.getMarker());
            }

            if(turn >= 5) {
                if(checkWinConditions()) {
                    gameWon = true;
                    alert("Player has won!");
                }
            }

            if(turn >= 9) {
                if(!checkWinConditions()) {
                    alert("The game has ended in a tie!")
                }
            }
        }
    };

    // Resets all cell to blank value
    const clearBoard = () => {
        for(r = 0; r < 3; r++) {
            for(c = 0; c < 3; c++) {
                gameboard[r][c] = '';
            }
        }
    }

    return {gameName, getTurn, increaseTurn, getGameboard, getPlayerInput, checkWinConditions, playRound, clearBoard};
};

function createPlayer (name) {
    const playerName = name;
    let playerMarker = '';

    const setMarker = (marker) => playerMarker = marker;

    const getMarker = () => playerMarker;

    return {playerName, setMarker, getMarker};
}

// Display factory
function createDisplay (game) {
    const game = game;
}