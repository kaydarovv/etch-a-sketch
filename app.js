let gridContainer = document.querySelector("#grid");
let numOfBoxes = 16;
let GridSliderSizeValue = document.querySelector("input");

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

function deleteGrid(gridContainer) {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    };

};

function draw() {
    let gridSquareList = document.querySelectorAll('.grid-square');

    gridSquareList.forEach(element => {
    element.addEventListener('mouseover',(event) => {
        element.style.backgroundColor = 'black';
    });
});
};



// INITIALIZATION
createGrid(numOfBoxes, gridContainer);
draw();

GridSliderSizeValue.addEventListener("input", (event) => {
    deleteGrid(gridContainer);
    numOfBoxes = GridSliderSizeValue.value;
    console.log(numOfBoxes);
    createGrid(numOfBoxes, gridContainer);
    draw();
});


// TRYING TO ADD ON HOVER AND MOUSE CLICK
// let gridSquareList = document.querySelectorAll('.grid-square');
// let hover = false;
// let click = false;
// gridSquareList.forEach(element => {
//     hover = false;
//     click = false;
//     element.addEventListener('mouseover',() => {
//         hover = true;
//     });
//     element.addEventListener('click',() => {
//         click = true;
//     });
//     if (hover && click) {
//         element.style.backgroundColor = 'black';
//     };
// });