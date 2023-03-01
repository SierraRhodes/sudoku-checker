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
  };

// console.log(sudoku.checkRows()); 