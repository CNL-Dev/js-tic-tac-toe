
// Gameboard factory
function createGameboard (name, player1, player2) {
    const gameName = name;
    const gameBoard = ['', '', '', '', '', '', '', '', ''];
    const player1 = player1;
    const player2 = player2;

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

    const playRound = (playerInput) => {
        if(!gameWon) {
            
        }
    };

    return {gameName, getTurn, increaseTurn, getGameBoard, getPlayerInput, playRound};
};

function createPlayer (name) {
    const playerName = name;
    let playerMarker = '';

    const setMarker = (marker) => playerMarker = marker;

    const getMarker = () => playerMarker;

    return {playerName, setMarker, getMarker};
}