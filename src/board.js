class Board {
    constructor() {
      this.ships = [];
      this.attacks = [];
    }
  
    placeShip(ship, coordinates, direction) {
      // Assume simple logic for placement, no boundary checks for now
      this.ships.push({ ship, coordinates, direction });
    }
  
    receiveAttack(coordinates) {
      this.attacks.push(coordinates);
      this.ships.forEach(({ ship, coordinates: [x, y], direction }) => {
        for (let i = 0; i < ship.length; i++) {
          const pos = direction === 'horizontal' ? [x, y + i] : [x + i, y];
          if (pos[0] === coordinates[0] && pos[1] === coordinates[1]) {
            ship.hit(i);
          }
        }
      });
    }
  
    allShipsSunk() {
      return this.ships.every(({ ship }) => ship.isSunk());
    }
  }
  
  module.exports = () => new Board();
  