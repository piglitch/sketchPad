const gridBox = document.querySelector('.grid-container');
const boxArray = [];

const daBox = () => {
for (let i = 0; i < 110; i++) {
    for (let j = 0; j < 60; j++) {   
        const box = document.createElement('div')
        box.classList.add('boxes')    
        gridBox.appendChild(box)
        boxArray.push(box)
        };
    }
}
daBox();



const draw = () => {
    var colorChosen = '';
    colorChosen = document.querySelector('.colorInput').value;
    let isColorChangeEnabled = false;

    for (let i = 0; i < boxArray.length; i++) {
        const box1 = boxArray[i];
 
        box1.addEventListener('click', () => {                    
            isColorChangeEnabled = !isColorChangeEnabled;                    
            }
        ); 
                 
        box1.addEventListener('mouseover', () => {
        if(isColorChangeEnabled){           
            box1.style.backgroundColor = `${colorChosen}`;
            }
        });
    }    
};



        


