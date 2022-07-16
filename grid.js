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
  /* define the private #cells variable outside the constructor, so it can ONLY be 
  accessed ny the "Grid" class. this way only indivdual elements inside of all the cells 
  at once and it cant be overwritten from outside the grid class. */
  #cells
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`); 
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`); 
    //adding a method for creating cell elements
    this.#cells = createCellElements(gridElement).map((cellElement, index) => {
      return new Cell(
        cellElement, 
        index % GRID_SIZE, 
        Math.floor(index / GRID_SIZE)
        );
    });
  }
  //make a getter for cellsByColumn
  get cellsByColumn() {
    return this.#cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || [];
      cellGrid[cell.x][cell.y] = cell;
      return cellGrid;
    }, []); //array of array, first var x represents row, the y the columns
  }
    /* make a privat getter to get all empty cells */
  get #emptyCells() {
    return this.#cells.filter(cell => cell.tile == null);
  }
  /* function to get random empty cells */
  randomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
    return this.#emptyCells[randomIndex];
  }

}

class Cell {
  /* defining the Cell variables as privat vars so it cant be modif. by outside class */
  #cellElement;
  #x
  #y
  #tile
  #mergeTile
  constructor(cellElement, x, y) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
  } 
  //creating getters for x and y because there are privat =>
  get x() {
    return this.#x;
  }
  get y() {
    return this.#y
  }

  get tile() {
    return this.#tile
  }
  //setter for moving to new position
  set tile(value) {
    this.#tile = value;
    if (value == null) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
  }

  get mergeTile() {
    return this.#mergeTile;
  }

  set mergeTile(value) {
    this.#mergeTile = value;
    if (value == null) return;
    this.#mergeTile.x = this.#x;
    this.#mergeTile.y = this.#y;
  }

  canAccept(tile) {
    return (
      this.tile == null || (this.mergeTile == null && this.tile.value === tile.value)
    );
  }
}

//function create cell elements is going to create all of the cell elements
//and return them => "one cell = <div class="cell"><div>"
function createCellElements(gridElement) {
  const cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridElement.append(cell);
  }
  return cells;
}