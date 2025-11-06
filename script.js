const grid = document.querySelector("#grid");
const colors = document.querySelectorAll(".color");
const setButton = document.querySelector("form > button");
const input = document.querySelector("input");
let gridColor = "red";
let gridSize = 16;
let elementsArray = [];

colors.forEach((color) => {
    color.addEventListener("click", () => {
        gridColor = color.id;
    });
});

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
            column.addEventListener("mouseover", (e) => {
                e.target.style.background = `${gridColor}`;
            });
            row.append(column);
        }
        elementsArray.push(row);
    }
    grid.append(...elementsArray);
}
createGrid();