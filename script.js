const grid = document.querySelector("#grid");
let gridSize = 16;
let elementsArray = [];

for (let i = 1; i <= gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= gridSize; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        column.addEventListener("mouseover", (e) => {
            e.target.style.background = "red";
        })
        row.append(column);
    }
    elementsArray.push(row);
}

grid.append(...elementsArray);