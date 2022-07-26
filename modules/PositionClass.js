export default class PositionClass {
    constructor ( _x, _y, _step) {
        this.x = _x,
        this.y = _y;
        this.coins = 0;
        this.step = _step;
    }

    get getPosition() {
        return this.x, this.y, this.coins ;
    }

    forward() {
        if (this.y - this.step < 0){
            this.y = 0;
        } else {
            this.y -= this.step;
        }
    }

    back() {
        if (this.y + this.step > 595){
            this.y = 595;
        } else {
            this.y += this.step;
        }
    }

    right() {
        if (this.x + this.step > 595){
            this.x = 595;
        } else {
            this.x += this.step;
        }
    }

    left() {
        if (this.x - this.step < 0){
            this.x = 0;
        } else {
            this.x -= this.step;
        }
    }

    addCoins(_prize) {
        this.coins += _prize;
    }
}
