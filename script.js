let gridSize = 16;
let randomColor = false;

drawGrid();

function drawGrid() {
    let sketchGridDiv = document.querySelector("#sketchGrid");
    let gridSizeSpan = document.querySelector("#gridSize");
    sketchGridDiv.replaceChildren();
    gridSizeSpan.textContent = gridSize;
    for (var i=1; i<=gridSize; i++) {
        for (var j=1; j<=gridSize; j++) {
            let div = document.createElement("div");
            div.setAttribute("id", `div${i}-${j}`)
            div.setAttribute("class", "pixel");
            div.addEventListener('mousemove', event => {toggleActive(event)});
            sketchGridDiv.appendChild(div);
        }
    }
}

function toggleActive(e){
    if (e.buttons==1) {
        if (!randomColor) {
            e.target.style.backgroundColor = 'black';
        }
        else {
            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
}

function gridChange(){
    let slider = document.getElementById("sizeRange");
    sketchGrid = document.getElementById("sketchGrid");
    gridSize=slider.value;
    sketchGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    drawGrid();
}

function randomNess(){
    randomNes = document.querySelector("#randomNes");
    randomNes.classList.toggle("active");
    randomColor = !randomColor;
    console.log("Yey");
}