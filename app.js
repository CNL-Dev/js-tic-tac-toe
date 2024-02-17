
// Gameboard factory
function createGameboard (name, player1, player2) {
    const gameName = name;
    const gameBoard = ['', '', '', '', '', '', '', '', ''];

    let turn = 0;
    let gameWon = false;
    const getTurn = () => turn;
    const increaseTurn = () => turn++;
    const getGameBoard = () => gameBoard;
    const getPlayerInput = (input, playerMarker) => {
        if(gameBoard[input] == '') {
            gameBoard[input] = playerMarker;
            increaseTurn();
        }
        else {
            console.error("You must select an empty cell!")
        }
    };

    const checkWinConditions = () => {
        
    };

    const playRound = () => {
        if(!gameWon) {
            if(turn % 2 == 0) {
                // The first parameter is purely for testing purposes
                getPlayerInput(prompt("Please enter a number according to the grid") ,player1.playerMarker);
            }
        }
    };

    return {gameName, getTurn, increaseTurn, getGameBoard, getPlayerInput, playRound};
};

function createPlayer (name) {
    const playerName = name;
    let playerMarker = '';

    const setMarker = (marker) => playerMarker = marker;

    return {playerName, setMarker};
}