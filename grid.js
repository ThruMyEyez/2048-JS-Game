//Grid layout globals variables
const GRID_SIZE = 4;
const CELL_SIZE = 21;
const CELL_GAP = 1;
/* CSS Grid target variables to access and change with JS
--grid-size: 4;
--cell-size: 20vmin;
--cell-gap: 2vmin;
*/
export default class Grid {
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`); 
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`); 
    //adding a method for creating cell elements
    createCellElements(gridElement) 
  }
}
//function create cell elements is going to create all of the cell elements
//and return them => "one cell = <div class="cell"><div>"
function createCellElements(gridElement) {
  const cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridElement.append(cell);
  }
  return cells;
}