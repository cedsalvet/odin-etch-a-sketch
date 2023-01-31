let gridSize = 16;

drawGrid();


function drawGrid() {
    let sketchGridDiv = document.querySelector("#sketchGrid");
    sketchGridDiv.replaceChildren();
    for (var i=1; i<=gridSize; i++) {
        for (var j=1; j<=gridSize; j++) {
            let div = document.createElement("div");
            div.setAttribute("id", `div${i}-${j}`)
            div.setAttribute("class", "pixel");
            div.addEventListener('mouseover', event => {toggleActive(event)});
            sketchGridDiv.appendChild(div);
        }
    }
}

function toggleActive(e){
    if (e.buttons==1) {
        e.target.style.transition = "all 0.1s"; 
        e.target.classList.toggle("activePixel");
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
