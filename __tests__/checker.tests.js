import Sudoku from './../src/checker.js';

describe('Sudoku', () => {
  test('It should initialize a 9 x 9 . grid with everything set to 0', () => {
    const sudoku = new Sudoku();
    expect (sudoku.grid).toEqual([
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ]);
 });
});