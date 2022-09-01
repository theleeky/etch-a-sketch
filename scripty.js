function main() {
    
    createGrid();
    sliderNumber();
    sliderChange();
    colorChange();
    boxListen();
}


const container = document.querySelector('.container');
let color = '#101010';
let boxColor = true;
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
            box.style.backgroundColor = '#ffffff'
            rows.appendChild(box);
        };
    };
    
};

function boxListen() {
    // change box color 
        let boxSelection = document.querySelectorAll('.box')
        boxSelection.forEach((selectedBox) => {
            selectedBox.addEventListener('mouseover', () => {
                if(boxColor){
                    selectedBox.style.backgroundColor = color;
                } else if (shader){
                    selectedBox.style.backgroundColor = LightenDarkenColor(hexc(selectedBox.style.backgroundColor), -10);
                } else if (lighten){
                    selectedBox.style.backgroundColor = LightenDarkenColor(hexc(selectedBox.style.backgroundColor), 10);
                } else if (rainbow){
                    const randomColor = Math.floor(Math.random()*16777215).toString(16)  // https://css-tricks.com/snippets/javascript/random-hex-color/ 
                    selectedBox.style.backgroundColor = '#' + randomColor;
                }
                container.style.backgroundColor = color;
                container.style.borderColor = color;
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
        boxColor = true;
        shader = false;
        lighten = false;
        rainbow = false;;
    })
    colorPicker.addEventListener('click', () => {
        color = colorPicker.value;
        boxColor = true;
        shader = false;
        lighten = false;
        rainbow = false;
    })
    const black = document.querySelector('#black');
    black.addEventListener('click', () => {
        color = '#101010';
        boxColor = true;
        shader = false;
        lighten = false;
        rainbow = false;
    })
    const eraser = document.querySelector('#eraser');
    eraser.addEventListener('click', () => {
        color = '#ffffff';
        boxColor = true;
        shader = false;
        lighten = false;
        rainbow = false;
    })
    const shading = document.querySelector('#shade');
    shading.addEventListener('click', () => {
        boxColor = false;
        shader = true;
        lighten = false;
        rainbow = false;
    })
    const lightening = document.querySelector('#lighten');
    lightening.addEventListener('click', () => {
        boxColor = false;
        shader = false;
        lighten = true;
        rainbow = false;
    })
    const rainbowed = document.querySelector('#rainbow');
    rainbowed.addEventListener('click', () => {
        boxColor = false;
        shader = false;
        lighten = false;
        rainbow = true;
    })
}

// function takes in a color value and amount to lighten or darken
// function then returns new color value
// https://css-tricks.com/snippets/javascript/lighten-darken-color/
function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

// function that converts rgb values to hexidecimal
//https://stackoverflow.com/questions/5999209/how-to-get-the-background-color-code-of-an-element-in-hex
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
  }

main()