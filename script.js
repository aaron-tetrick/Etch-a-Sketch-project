const gridValue = document.querySelector('#grid-value');
const btn = document.querySelectorAll('.btn')
const rainbow = document.getElementById('rainbow');
const black = document.getElementById('black');
const clear = document.getElementById('clear');
const grid = document.getElementById('grid');



//Event Listeners
rainbow.addEventListener('click', () => changeColor('rainbow'));
black.addEventListener('click', () => changeColor('black'));
clear.addEventListener('click', clearGrid);


//Creates the grid based on the size that the user inputs
function changeGrid(size) {
    clearGrid;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i=0; i < (size*size); i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

    }

}

//Displays the current grid size on the page
function gridSizeValue(num) {
    gridValue.innerText = `${num} x ${num}`;
}

//Clears the grid and prompts for new grid size
function clearGrid() {
    grid.innerHTML = ''
    let gridSize = prompt("Choose a grid size (MAX: 64)");
    if (gridSize >= 64) {
        changeGrid(64);
        gridSizeValue(64);
    } else if (gridSize <= 0) {
        changeGrid(1);
        gridSizeValue(1);
    } else if (gridSize < 64 && gridSize > 0) {
        changeGrid(gridSize);
        gridSizeValue(gridSize);
    } else {
        alert("You must enter a number");
        gridSize = prompt("Choose a grid size (MAX: 64)");
    }    
}

//Changes the color of the cells when hovering
function changeColor(color) {
    if (color === "black") {
        grid.addEventListener("mouseover", (e) => {
            if (e.target.classList.value === "cell") {
            e.target.style.backgroundColor = "black";
            e.target.style.transition = '0.5s';
            }
         })
        } else if (color = "rainbow") {
        grid.addEventListener("mouseover", (e) => {
            if (e.target.classList.value === "cell") {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()* 256)}, ${Math.floor(Math.random()* 256)}, ${Math.floor(Math.random()* 256)})`;
            e.target.style.transition = '0.5s';
        }
         })
    }
}

//Loads fresh grid when the page opens
window.onload = clearGrid;