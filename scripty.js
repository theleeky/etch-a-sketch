// TODO
/*
- mouse over grid change colour funct
- colour change function
- button functions black, shader, lighten, rainbow, eraser
- slider function
*/

// grid will be dependant on slider
let grid = parseInt(document.querySelector('#slider').value);
console.log(grid);

let color = 'black'

const container = document.querySelector('.container');
const div = document.createElement('div');


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

function gridColor(boxSelection, color) {
    boxSelection.style.backgroundColor = color;
}


function main() {

     // change grid size
     const slider = document.querySelector('#slider');
     slider.addEventListener('mouseup', () => {
        let sliderValue = document.querySelector('#slider').value;
        createGrid(sliderValue)
     })

    // change box color 
    const boxSelection = document.querySelectorAll('.box')
    boxSelection.forEach((selectedBox) => {
        selectedBox.addEventListener('mouseover', () => {
            selectedBox.style.backgroundColor = color;
        });
    });

}

createGrid()
main()