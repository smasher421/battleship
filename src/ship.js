//implementing the ship class

class Ship{
    constructor(length){
        this.length = length;
        this.hits = [];
    }

    hit(position) {
        if(position < this.length && !this.hits.includes(position)){
            this.hits.push(position);
        }
    }


    isSunk(){
        return this.hits.length === this.length;
    }
}


module.exports = (length) => new Ship(length);