//Create and append container div to body
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'container'
body.appendChild(container);

//create and append grid divs to container div
const createGrid = function (num) {
    for (var j = 1; j <= num; j++) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        grid.id = 'grid' + j;
        container.appendChild(grid);
    }
}

//jayout grid across entire canvas equally
const layoutGrid = function (num) { 
    for (var i = 0; i <= num; i++){
        createGrid(16);
    }
}
layoutGrid(16)



