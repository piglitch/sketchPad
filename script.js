const gridBox = document.querySelector('.grid-container');

const getColor = () =>{

    var colorChosen = '';
    colorChosen = document.querySelector('.colorInput').value;
    //console.log(colorChosen);
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
                box.addEventListener('mouseover', ()=>{
                    if(isColorChangeEnabled){
                        colorChosen = document.querySelector('.colorInput').value;
                        box.style.backgroundColor = `${colorChosen}`;
                        console.log(colorChosen);
                }});
            }; 
            draw();
        };       
    }
};


