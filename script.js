const container = document.querySelector("#container");
let elementsArray = [];

for (let i = 1; i <= 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= 16; j++) {
        let column = document.createElement("div");
        column.textContent = `I'm column number ${j}`;
        column.classList.add("column");
        row.append(column);
    }
    elementsArray.push(row);
}
container.append(...elementsArray);