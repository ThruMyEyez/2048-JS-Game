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
    //get all of the cells themselves
    //create some cell elements
  }
}