const gridBox = document.querySelector('.grid-container');
const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta", "teal", "lime", "indigo", "silver", "gold", "maroon"];

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {   
    
        const box = document.createElement('div');
        box.classList.add('boxes');    
//        box.style.backgroundColor = colors[(i * 16 + j) % colors.length];
        gridBox.appendChild(box);
    }       
}

console.dir(gridBox);
