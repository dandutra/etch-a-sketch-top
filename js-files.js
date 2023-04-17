  
  function createGrid(rows, columns) {
    let gridContainer = document.querySelector('#grid-container');
    let slider = document.getElementById("slider");
    let cellSize = 50 / columns;
  
    //GRID SETUP
    slider.addEventListener("input", updateGrid);
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridAutoRows = `${cellSize}fr`; 
    gridContainer.style.gridAutoColumns = `${cellSize}fr`;
  
    //GRID CREATOR
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cellDiv = document.createElement('div');
        cellDiv.className = "cell";
        gridContainer.appendChild(cellDiv);
        //cell event
        cellDiv.addEventListener('mouseover', function () {
          colorCell(cellDiv);
        });
      }
    }
  }

  function updateGrid() {
    let slider = document.getElementById("slider");
    let gridContainer = document.getElementById("grid-container");
      gridContainer.innerHTML = "";
      
      let rows = slider.value;
      let columns = slider.value;
      createGrid(rows, columns);
    }

  function colorCell(cell) {
    cell.style.backgroundColor = "black";
  }

  //RESET DIV
  const reset = document.querySelector('.reset-button');
  reset.addEventListener('click', discolorCell);
  
  function discolorCell() {
    const cellDiv = document.querySelectorAll('.cell');
    cellDiv.forEach(cellDiv => {
      cellDiv.style.backgroundColor = "white";
    })
  }
  
  //ONLOAD SETUP
  window.onload = function () {
    let rows = 50;
    let columns = 50;
    createGrid(rows, columns);
  
    let slider = document.getElementById("slider");
    slider.addEventListener("input", updateGrid);
  }

  //SLIDER ONINPUT
  function getValue() {
    const textInput = document.getElementById("text-input");
    textInput.value = slider.value;
  }
  