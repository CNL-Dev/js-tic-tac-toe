
// Gameboard factory
function createGameboard (name) {
    const gameName = name;

    let turn = 0;
    const getTurn = () => turn;

    return {gameName, getTurn};
};