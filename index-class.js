import PositionClass from './modules/PositionClass.js';
import Coins from './modules/Coins.js';

const msg = document.querySelector('#p-msg');
const avatarBx = document.querySelector("#ctn-avatar");

let posX = 300; 
let posY = 300;
let avatarSize = 5;
let step = 5; 
let prizes = [];

for (let i=0; i<5; i++){
    prizes[i] = new Coins();
};
for (let i=0; i<5; i++){
    const ctnCoins = document.querySelectorAll("[data-coins='"+i+"']");
    ctnCoins[0].innerHTML += `<div class="coins" data-id="${i}">&nbsp;</div>`;
};

for (let i=0; i<5; i++){
    const eleCoin = document.querySelectorAll("[data-id='"+i+"']");
    eleCoin[0].style.left = prizes[i].positions.x + 'px';
    eleCoin[0].style.top = prizes[i].positions.y + 'px';
    eleCoin[0].style.display = 'block';
};

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

    const find = findPrize();
    if (find>=0){
        newAvatar.addCoins(5);
        avatarSize = newAvatar.coins + 5;
        avatarBx.style.width = avatarSize + 'px';
        avatarBx.style.height = avatarSize + 'px';
    };

    avatarBx.style.left = newAvatar.x + 'px';
    avatarBx.style.top  = newAvatar.y + 'px';
    msg.innerHTML = `x = ${newAvatar.x}  y = ${newAvatar.y}  Coins: ${newAvatar.coins}`;
});

function findPrize(){
    const avX = parseInt(avatarBx.style.left);
    const avY = parseInt(avatarBx.style.top);
    const eleCoins = document.querySelectorAll(".coins");
    for (let i=0; i<eleCoins.length; i++){
        const x = parseInt(eleCoins[i].style.left);
        const y = parseInt(eleCoins[i].style.top);
        if (((avX + avatarSize >= x && avX <= x) || 
            (avX <= x + 5 && avX + avatarSize >= x + 5)) &&
            ((avY + avatarSize >= y && avY <= y) || 
            (avY <= y + 5 && avY + avatarSize >= y + 5))
           ){
            const node = eleCoins[i];
            if (node.parentNode) {
              node.parentNode.removeChild(node);
            }        
            return i;
        }
    }
    return -1;
}