import sizeType from "../types/SizeType";
import positionType from "../types/PositionType";

export default class Game {
    grid: string[][];
   
    constructor(gridSize: sizeType, quantityOfBomb: number) {

        const bombsPosition:positionType[] = []
        while (bombsPosition.length < quantityOfBomb) {
            const newBomb = {
                x: Math.floor(Math.random() * gridSize.width),
                y: Math.floor(Math.random() * gridSize.height)
            }
            if (bombsPosition.filter(value => value.x === newBomb.x && value.y === newBomb.y).length === 0) {
                bombsPosition.push(newBomb)
            }
        }

        let grid: string[][] = new Array(gridSize.height)
        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(gridSize.width).fill('');
        }

        bombsPosition.forEach(bomb => {
            grid[bomb.y][bomb.x] = 'B'
        })

        const countBombsAround = (x:number, y:number, grid:string[][]):string => {
            if (grid[y][x] === 'B') return 'B' 
            let counter = 0
            if (y > 0) {
                if (x > 0) {
                    if (grid[y-1][x-1] === 'B') counter++
                }
                if (x < grid[0].length - 1) {
                    if (grid[y-1][x+1] === 'B') counter++
                }
                if (grid[y-1][x] === 'B') counter++
            }

            if (x > 0) {
                if (grid[y][x-1] === 'B') counter++
            }
            if (x < grid[0].length - 1) {
                if (grid[y][x+1] === 'B') counter++
            }

            if (y < grid.length - 1) {
                if (x > 0) {
                    if (grid[y+1][x-1] === 'B') counter++
                }
                if (x < grid[0].length - 1) {
                    if (grid[y+1][x+1] === 'B') counter++
                }
                if (grid[y+1][x] === 'B') counter++
            }
            return counter === 0 ? '' : counter.toString()
        }

        grid = grid.map((row, rowIndex) => row.map((cell, colIndex) => {
            return countBombsAround(colIndex, rowIndex, grid)
        }))


        this.grid = grid
          
    }
   
    // greet() {
    //   return "Hello, " + this.greeting;
    // }
}