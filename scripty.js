// TODO
/*
- slider number
- color change
- buttons
*/

let color = 'black'

const container = document.querySelector('.container');

function createGrid(number = 16) {
    // clear grid
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    // grid creation
    for (let i = 0; i < number; i++) {
        // create rows
        const rows = document.createElement('div');
        rows.classList.toggle('row');
        container.appendChild(rows);
        // create coloumns
        for (let j = 0; j < number; j++) {
            const box = document.createElement('div');
            box.classList.toggle('box');
            rows.appendChild(box);
        };
    };
    
};

function boxListen() {
    // change box color 
    let boxSelection = document.querySelectorAll('.box')
    boxSelection.forEach((selectedBox) => {
        selectedBox.addEventListener('mouseover', () => {
            selectedBox.style.backgroundColor = color;
        });
    });
}

function sliderNumber(value = 16) {
    
    const sliderNumber = document.querySelector('.value')
    sliderNumber.textContent = value + 'x' + value;
}

function main() {
    
    createGrid();
    boxListen();
    sliderNumber();

     // change grid size
     const slider = document.querySelector('#slider');
     slider.addEventListener('mouseup', () => {
        let sliderValue = document.querySelector('#slider').value;
        createGrid(sliderValue)
        boxListen();
        sliderNumber(sliderValue);
     })

}

main()