let gridSize = 16
let sketchGridDiv = document.querySelector("#sketchGrid");


for (var i=0; i<gridSize; i++) {
    for (var j=0; j<gridSize; j++) {
        let div = document.createElement("div");
        div.setAttribute("id", `div${i}-${j}`)
        div.setAttribute("class", "pixel");

        sketchGridDiv.appendChild(div);
    }
}
