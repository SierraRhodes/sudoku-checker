import Sudoku from './../src/checker.js';

describe('sudoku grid', () => {
  test('It should initialize a 9 x 9 grid', () => {
    const sudoku = new Sudoku();
    expect(sudoku.grid).toEqual([  
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ]);
 });
});

// describe('sudoku rows', () => {
//   test('It should have each row contain all numbers from 1 to 9.', () => {
//     const sudoku = new Sudoku();
//     expect (sudoku.rows).toEqual([
//       [0,0,0,0,0,0,0,0,0],
//       [0,0,0,0,0,0,0,0,0],
//       [0,0,0,0,0,0,0,0,0],
//       [0,0,0,0,0,0,0,0,0],
//       [0,0,0,0,0,0,0,0,0],
//       [0,0,0,0,0,0,0,0,0],
//       [0,0,0,0,0,0,0,0,0],
//       [0,0,0,0,0,0,0,0,0],
//     ]);
//  });
// }); 
