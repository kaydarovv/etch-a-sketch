let gridContainer = document.querySelector("#grid");
let numOfBoxes = 16;


function createGrid(gridSize, gridContainer) {
    for (let i = 1; i < gridSize**2 + 1 ; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.toggle('grid-square');
        gridSquare.style.width = `calc(100%/${numOfBoxes})`
        gridSquare.style.height = `calc(100%/${numOfBoxes})`
        
        gridContainer.appendChild(gridSquare);    
    };
    const gridSquare = document.createElement("div");
    gridSquare.classList.toggle('grid-square');
    gridContainer.appendChild(gridSquare);
}





// INITIALIZATION
createGrid(numOfBoxes, gridContainer);

let gridSquareList = document.querySelectorAll('.grid-square');

gridSquareList.forEach(element => {
    element.addEventListener('mouseover',(event) => {
        console.log("cock");
        element.style.backgroundColor = 'black';
    });
});
