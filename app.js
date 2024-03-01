
// Gameboard factory
function createGameboard (name, player1, player2) {
    const gameName = name;
    let gameboard = ['', '', '',
                       '', '', '',
                       '', '', ''];
    const gameboardPlayer1 = player1;
    const gameboardPlayer2 = player2;

    let turn = 0;
    let gameWon = false;
    const getTurn = () => turn;
    const increaseTurn = () => turn++;
    const getGameboard = () => gameboard;
    const getPlayerInput = (input, playerMarker) => {
        if(gameboard[input] == '') {
            gameboard[input] = playerMarker;
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
            // Player 1 goes on even turns, 
            // player 2 on odd turns.
            if(turn % 2 == 0) {
                getPlayerInput(prompt("Please select an empty cell:") , gameboardPlayer1.getMarker());
            } else {
                getPlayerInput(prompt("Please select an empty cell:") , gameboardPlayer2.getMarker());
            }
        }
    };

    return {gameName, getTurn, increaseTurn, getGameboard, getPlayerInput, playRound};
};

function createPlayer (name) {
    const playerName = name;
    let playerMarker = '';

    const setMarker = (marker) => playerMarker = marker;

    const getMarker = () => playerMarker;

    return {playerName, setMarker, getMarker};
}