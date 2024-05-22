const Game = require('../src/game');
const Ship = require('../src/ship');

describe('Game', () =>{
    test('should initialize a game with two boards', () => {
        const game = Game();
        expect(game.playerBoard).toBeDefined();
        expect(game.opponentBoard).toBeDefined();
    });

    test('should place ships for both players', () =>{
        const game = Game();
        const playerShip = Ship(3);
        const opponentShip = Ship(3);
        game.playerBoard.placeShip(playerShip, [0,0], 'horizontal');
        game.opponentBoard.placeShip(opponentShip, [0,0], 'horizontal');
        expect(game.playerBoard.ships.length).toBe(1);
        expect(game.opponentBoard.ships.length).toBe(1);
    })

    test('should handle player attacks on opponent', ()=> {
        const game = Game();
        const opponentShip = Ship(3);
        game.opponentBoard.placeShip(opponentShip, [0,0], 'horizontal');
        game.attack([0,0]);
        expect(game.opponentBoard.attacks).toContainEqual([0,0]);
    });

    test('should determine if the game is over', () => {
        const game = Game();
        const playerShip = Ship(1);
        const opponentShip = Ship(1);
        game.playerBoard.placeShip(playerShip, [0,0], 'horizontal');
        game.opponentBoard.placeShip(opponentShip, [0,0], 'horizontal');
        game.attack([0,0]);
        game.attack([0,0], true); //opponent attacks
        expect(game.isGameOver()).toBe(true);
    });
});