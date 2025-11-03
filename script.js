const container = document.querySelector("#container");
let elementsArray = [];

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = `I'm DIV number ${j}`;
        elementsArray.push(newDiv);
    }
}
container.append(...elementsArray);
console.log(container.childElementCount);