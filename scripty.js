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

const container = document.querySelector('.container');
const div = document.createElement('div');
grid = 10;

function createGrid(grid) {
    for (let i = 0; i < grid; i++) {
        // create rows
        const rows = document.createElement('div');
        rows.classList.toggle('row');
        container.appendChild(rows);
        // create coloumns
        for (let j = 0; j < grid; j++) {
            const box = document.createElement('div');
            box.classList.toggle('box');
            rows.appendChild(box);
        };
    };
};

function gridColor(boxSelection, color) {
    boxSelection.style.backgroundColor = color;
}



createGrid(grid)

function main() {
    // listen for mouse-over box
    const boxSelection = document.querySelectorAll('.box')
    boxSelection.forEach((selectedBox) => {
        selectedBox.addEventListener('mouseover', () => {
            selectedBox.style.backgroundColor = color;
        });
    });
}

let color = 'black'

main()