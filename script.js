//Create and append container div to body
const body = document.querySelector('body');
const div = document.createElement('div');
div.id = 'container'
body.appendChild(div);
//create and append grid divs to container div
const grid = document.createElement('div')
grid.id = 'grid'
div.appendChild(grid)


