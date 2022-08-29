function main() {
    
    createGrid();
    sliderNumber();
    sliderChange();
    colorChange();
    rainbowMode();
}


const container = document.querySelector('.container');
let color = '#000000';
let shader = false;
let lighten = false;
let rainbow = false;


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
            console.log(selectedBox.style.backgroundColor);
        });
    });
}

function sliderNumber(value = 16) {
    
    const sliderNumber = document.querySelector('.value')
    sliderNumber.textContent = value + 'x' + value;
}

// change grid size
function sliderChange(){
    const slider = document.querySelector('#slider');
    slider.addEventListener('mouseup', () => {
        let sliderValue = document.querySelector('#slider').value;
        createGrid(sliderValue);
        boxListen();
        sliderNumber(sliderValue);
});
}

function colorChange() {
    const colorPicker = document.querySelector('#color-choice');
    colorPicker.addEventListener('input', () => {
        color = colorPicker.value;
    })
    colorPicker.addEventListener('click', () => {
        color = colorPicker.value;
    })
    const black = document.querySelector('#black');
    black.addEventListener('click', () => {
        color = '#000000'
    })
    const eraser = document.querySelector('#eraser');
    eraser.addEventListener('click', () => {
        color = '#ffffff'
    })
}

function rainbowMode() {
    let boxSelection = document.querySelectorAll('.box')
    boxSelection.forEach((selectedBox) => {
        selectedBox.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16)  // https://css-tricks.com/snippets/javascript/random-hex-color/ 
            selectedBox.style.backgroundColor = '#' + randomColor;
        });
    });
}



main()