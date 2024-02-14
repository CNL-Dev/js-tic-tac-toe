
// Gameboard factory
function createGameboard (name) {
    const gameName = name;
    const gameBoard = ['', '', '', '', '', '', '', '', ''];

    let turn = 0;
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

    return {gameName, getTurn, increaseTurn, getGameBoard, getPlayerInput};
};

function createPlayer (name) {
    const playerName = name;
    let playerMarker = '';

    const setMarker = (marker) => playerMarker = marker;

    return {playerName, setMarker};
}