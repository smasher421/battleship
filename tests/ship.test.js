const Ship = require('../src/ship');


describe('Ship', () =>{
    test('should create ship with a given length', () => {
        const ship = Ship(3);
        expect(ship.length).toBe(3);
    });

    test('should register a hit', () =>{
        const ship = Ship(3);
        ship.hit(0);
        expect(ship.hits).toEqual([0]);
    });


    test('should sink the ship when all positions are 0', () =>{
        const ship = Ship(2);
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk()).toBe(true);
    });

    test('should not sink the ship when NOT all the positions are hit', ()=>{
        const ship = Ship(2);
        ship.hit(0);
        expect(ship.isSunk()).toBe(false);
    });
});