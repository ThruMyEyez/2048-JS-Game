import Grid from "./grid.js"
import Tile from "./tile.js"

const gameBoard = document.getElementById("game-board")

const grid = new Grid(gameBoard);
console.log(grid.randomEmptyCell());
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);