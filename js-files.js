/* Etch-a-Sketch project:
1- The page will have a grid created by javascript, this grid's size is inputable.
2- The grid will be made with a series of divs.
3- There will be a reset button to the grid. The button will listen to a click and reset the grid.*/

// JAVASCRIPT GRID
    function createGrid(rows, columns) {
    const gridContainer = document.querySelector('#grid-container');
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = "cell";
            cellDiv.style.gridTemplateColumns = `repeat(${rows},${columns}fr)`;
            gridContainer.appendChild(cellDiv);
        }
    }
}
createGrid(16,16);

//CELL EVENTS
const cellDiv = document.querySelectorAll('.cell');
cellDiv.forEach(function(cell) {
  cell.addEventListener('mouseover', function() {
    colorCell(cell);
  });
});

function colorCell(cell) {
  cell.style.backgroundColor = "black";
}

const reset = document.querySelector('.reset-button');
reset.addEventListener('click', discolorCell);

function discolorCell () {
    const cellDiv = document.querySelectorAll('.cell');
    cellDiv.forEach(cellDiv => {
        cellDiv.style.backgroundColor = "white";
    })
}

//SLIDER

function getValue() {
  let slider = document.getElementById("slider");
  let textInput = document.getElementById("text-input");
  textInput.value = slider.value;

}

    




