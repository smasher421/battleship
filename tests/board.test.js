const Board = require('../src/board');
const Ship = require('../src/ship');

describe('Board', () => { 
    test('should place a ship at given coordinates', () => {
        const board = Board();
        const ship = Ship(3);
        board.placeShip(ship, [0, 0], 'horizontal');
        expect(board.ships.length).toBe(1);
    });

    test('should report if all ships are sunk', () => {
        const board = Board();
        const ship = Ship(2);
        board.placeShip(ship, [0,0], 'horizontal');
        board.receiveAttack([0,0]);
        board.receiveAttack([0,1]);
        expect(board.allShipsSunk()).toBe(true);
    });

    test('should not report all ships sunk if at least one is still afloat', () => {
        const board = Board();
        const ship1 = Ship(2);
        const ship2 = Ship(3);
        board.placeShip(ship1, [0,0], 'horizontal');
        board.placeShip(ship2, [1,0], 'horizontal');
        board.receiveAttack([0,0]);
        board.receiveAttack([0,1]);
        expect(board.allShipsSunk()).toBe(false);
    });
});