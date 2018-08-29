//Create and append container div to body
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'container'
const button = document.createElement('button')
button.id = 'reset'
button.textContent = 'Reset Grid'
body.appendChild(button)
body.appendChild(container);

//create and append grid divs to container div
const createGrid = function (num) {
    let num_squares = num
    for (var j = 1; j <= num_squares; j++) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        grid.id = 'grid' + j;
        container.appendChild(grid);
       
        grid.addEventListener('click', function (e) {
            this.style.background = 'black';
          });
      
        grid.addEventListener('mousemove', function (e) {
        //left mouse button down
            if (e.buttons == 1) {
            console.log(e)
            this.style.background = 'black';
        }
        //right mouse button down
        if (e.buttons == 2) {
            this.style.background = 'blue';
        }
        });
    }
}
 //resets the grids
 let clearGrid = document.querySelector('#reset');
 clearGrid.addEventListener('click', function () {
    let grids = prompt("how many");
    layoutGrid(grids) 
}) 
 
//layout grid across entire canvas equally
const layoutGrid = function (num) { 
    for (var i = 0; i < num; i++){
        createGrid(num);
    }
}
layoutGrid(16)





