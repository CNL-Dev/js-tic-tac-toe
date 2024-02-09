
// Gameboard factory
function createGameboard (name) {
    const gameName = name;
    const gameBoard = ['', '', '', '', '', '', '', '', ''];

    let turn = 0;
    const getTurn = () => turn;
    const getGameBoard = () => gameBoard;

    return {gameName, getTurn, getGameBoard};
};