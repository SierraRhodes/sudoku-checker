export default function Sudoku() {
  this.grid = [  
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  //correct number 0 => 5

  this.checkRows = function () {
    let valid = true;
    this.grid.forEach(row => {
      const rowValues = new Set();
      let rowIsValid = true;
      row.forEach(value => {
        if (value < 1 || value > 9 || rowValues.has(value)) {
          rowIsValid = false;
        } else {
          rowValues.add(value);
        }
      });
      if (!rowIsValid) {
        valid = false;
      }
    });
    return valid;
  };
  this.checkColumns = function () {
    let valid = true;
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const colValues = new Set();
      let colIsValid = true;
      for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        const value = this.grid[rowIndex][colIndex];
        if (value < 1 || value > 9 || colValues.has(value)) {
          colIsValid = false;
        } else {
          colValues.add(value);
        }
      }
      if (!colIsValid) {
        valid = false;
      }
    }
    return valid;
  }
  this.checkSubGrids = function () {
    let valid = true;
    //Check each 3x3 subgrid
    for(let i = 0; i < 9; i +=3) {
      for(let j = 0; j < 9; j+= 3) {
        const subGridValues = new Set();
        let subGridIsValid = true;
        //Check each cell in the subgrid
        for(let x = i; x < i + 3; x++) {
          for(let y = j; y < j + 3; y++) {
            const value = this.grid[x][y];
            if(value < 1 || value > 9 || subGridValues.has(value)) {
              subGridIsValid = false;
            } else {
              subGridValues.add(value);
            }

          }
        }
        if (!subGridIsValid) {
          valid = false;
        }
      }
    } 
    return valid;
  }
  };

// console.log(sudoku.checkRows()); 