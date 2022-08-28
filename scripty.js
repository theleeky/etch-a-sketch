// TODO
/*
1. global variable for the color
2. set background color and slider color to be that global variable
3. create grid
4. if mouse over div set color to global variable color
*/

// grid will be dependant on slider
let grid = parseInt(document.querySelector('#slider').value);
console.log(grid);

const container = document.querySelector('.container');
const div = document.createElement('div');


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

createGrid(grid)