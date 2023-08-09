const gridBox = document.querySelector('.grid-container');
//const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta", "teal", "lime", "indigo", "silver", "gold", "maroon"];

let isColorChangeEnabled = false;

for (let i = 0; i < 110; i++) {
    for (let j = 0; j < 60; j++) {   
        const box = document.createElement('div');
        box.classList.add('boxes');    
        gridBox.appendChild(box);

        box.addEventListener('click', ()=> {                    
            isColorChangeEnabled = !isColorChangeEnabled;                    
        }); 
        
        const draw = () => {           
            box.addEventListener('mousemove', ()=>{
                if(isColorChangeEnabled){
                    box.style.backgroundColor = 'red';
            }});
        }; 
        draw();
    };       
}


