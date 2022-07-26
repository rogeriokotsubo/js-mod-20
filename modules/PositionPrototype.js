export default function PositionPrototype( _x, _y, _step) {
    this.x = _x,
    this.y = _y;
    this.coins = 0;
    this.step = _step;
} 

PositionPrototype.prototype.getPosition = function() {
    return this.x, this.y, this.coins ;
}

PositionPrototype.prototype.forward = function() {
    if (this.y - this.step < 0){
        this.y = 0;
    } else {
        this.y -= this.step;
    }
}

PositionPrototype.prototype.back = function() {
    if (this.y + this.step > 595){
        this.y = 595;
    } else {
        this.y += this.step;
    }
}

PositionPrototype.prototype.right = function() {
    if (this.x + this.step > 595){
        this.x = 595;
    } else {
        this.x += this.step;
    }
}

PositionPrototype.prototype.left = function() {
    if (this.x - this.step < 0){
        this.x = 0;
    } else {
        this.x -= this.step;
    }
}

PositionPrototype.prototype.addCoins = function(_prize) {
    this.coins += _prize;
}