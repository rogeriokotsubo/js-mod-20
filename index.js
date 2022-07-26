import PositionClosure from './modules/PositionClosure.js';

const msg = document.querySelector('#p-msg');
const ctnAvatar = document.querySelector("#ctn-drawn");
const avatarBx = document.querySelector("#ctn-avatar");

let posX = 300; 
let posY = 300;
let step = 5; 

const newAvatar = new PositionClosure(posX, posY, step);

document.body.addEventListener('keydown',(event) => {
    const key = event.key;  
    
    switch (event.key) {   
        case "ArrowLeft":
            newAvatar.left();
            break;
        case "ArrowRight":
            newAvatar.right();
            break;
        case "ArrowUp":
            newAvatar.forward();
            break;
        case "ArrowDown":
            newAvatar.back();
            break;
    }

    let newPosition = newAvatar.getPosition();

    if (newPosition.x%50===0 || newPosition.y%50===0){
        newAvatar.addCoins(5);
    };
    newPosition = newAvatar.getPosition();

    avatarBx.style.left = newPosition.x + 'px';
    avatarBx.style.top  = newPosition.y + 'px';
    msg.innerHTML = `x = ${newPosition.x}  y = ${newPosition.y}  Coins: ${newPosition.coins}`;
});



