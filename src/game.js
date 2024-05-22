const Board = require('./board');

class Game {
  constructor() {
    this.playerBoard = Board();
    this.opponentBoard = Board();
  }

  attack(coordinates, isOpponent = false) {
    const board = isOpponent ? this.playerBoard : this.opponentBoard;
    board.receiveAttack(coordinates);
  }

  isGameOver() {
    return this.playerBoard.allShipsSunk() || this.opponentBoard.allShipsSunk();
  }
}

module.exports = () => new Game();
