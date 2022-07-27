export default class PositionClass {
    
    #x
    #y
    #coins
    #step
    #max
    
    constructor ( _x, _y, _step) {
        this.#x = _x;
        this.#y = _y;
        this.#coins = 0;
        this.#step = _step;
        this.#max = 595;
    }

    get x() {
         return this.#x;
    }
    get y() {
        return this.#y;
    }
    get coins() {
        return this.#coins;
    }
    get step() {
        return this.#step;
    }

    forward() {
        if (this.#y - this.#step < 0){
            this.#y = 0;
        } else {
            this.#y -= this.#step;
        }
    }

    back() {
        if (this.#y + this.#step > this.#max){
            this.#y = this.#max;
        } else {
            this.#y += this.#step;
        }
    }

    right() {
        if (this.#x + this.#step > this.#max){
            this.#x = this.#max;
        } else {
            this.#x += this.#step;
        }
    }

    left() {
        if (this.#x - this.#step < 0){
            this.#x = 0;
        } else {
            this.#x -= this.#step;
        }
    }

    addCoins(_prize) {
        this.#coins += _prize;
        this.#max = 595 - this.#coins;
    }
}
