const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
const btn = document.querySelectorAll('.btn')
const rainbow = document.getElementById('rainbow');
const black = document.getElementById('black');
const clear = document.getElementById('clear');
const grid = document.getElementById('grid');





function hover() {
    console.log("hi")
}

slider.addEventListener('input', gridSizeValue)
rainbow.addEventListener('click', () => changeColor('rainbow'));
black.addEventListener('click', () => changeColor('black'));
clear.addEventListener('click', clearGrid);




function changeGrid() {
    
}






function gridSizeValue() {
    //console.log(e.target.value, slider.value);
    sliderValue.innerText = `${slider.value} x ${slider.value}`;
}




function clearGrid() {
    console.log("Clear");
}

function changeColor(color) {
    if (color === "black") {
        console.log("Black");
    } else if (color = "rainbow") {
        console.log("Rainbow");
    }
}