export default class Coins {
    constructor (){
        this.positions = randomPositions();
    };

    get getCoins() {
        return this.positions;
    }
}

function randomPositions(){
    let positions = {};
    const x = Math.floor(Math.random()*(119 - 0 + 1) + 0) * 5;
    const y = Math.floor(Math.random()*(119 - 0 + 1) + 0) * 5;
    positions = {   x: x,
                    y: y
                };
    return positions;
    }