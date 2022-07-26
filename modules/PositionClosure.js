export default function PositionClosure(_x, _y, _step) {
    let x = _x;
    let y = _y;
    let coins = 0;
    const step = _step;

    function getPosition(){
        return {x, y, coins};
    }

    function forward(){
        if (y-step<0){
            y = 0;
        } else {
            y -= step;
        }
    }

    function back(){
        if (y+step>595){
            y = 595;s
        } else {
            y += step;
        }
    }

    function right(){
        if (x+step>595){
            x = 595;
        } else {
            x += step;
        }
    }

    function left(){
        if (x-step<0){
            x = 0;
        } else {
            x -= step;
        }
    }

    function addCoins(_prize){
        coins += _prize;
    }

    return { 
            forward,
            back,
            right,
            left,
            addCoins,
            getPosition
        }
}