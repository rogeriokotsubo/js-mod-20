import PositionClass from './modules/PositionClass.js';

const msg = document.querySelector('#p-msg');
const ctnAvatar = document.querySelector("#ctn-drawn");
const avatarBx = document.querySelector("#ctn-avatar");

let posX = 300; 
let posY = 300;
let step = 5; 

const newAvatar = new PositionClass(posX, posY, step);

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

    if (newAvatar.x%50===0 || newAvatar.y%50===0){
        newAvatar.addCoins(5);
    };

    avatarBx.style.left = newAvatar.x + 'px';
    avatarBx.style.top  = newAvatar.y + 'px';
    msg.innerHTML = `x = ${newAvatar.x}  y = ${newAvatar.y}  Coins: ${newAvatar.coins}`;
});

