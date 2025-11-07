const grid = document.querySelector("#grid");
const setButton = document.querySelector("form > button");
const input = document.querySelector("input");
let gridSize = 16;
let elementsArray = [];

setButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newSize = parseInt(input.value);
    if (newSize > 1 && newSize <= 25) {
        gridSize = newSize;
        createGrid();
    } else {
        alert("Your grid must be between 2 to 25");
    }
});

function createGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    elementsArray = [];
    for (let i = 1; i <= gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 1; j <= gridSize; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            column.style.opacity = 0;
            column.addEventListener("mouseover", (e) => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                e.target.style.background = `rgb(${r}, ${g}, ${b})`;

                column.style.opacity = parseFloat(window.getComputedStyle(column).opacity) + 0.1;
            });
            row.append(column);
        }
        elementsArray.push(row);
    }
    grid.append(...elementsArray);
}
createGrid();