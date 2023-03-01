import Sudoku from './../src/checker.js';

describe('sudoku grid', () => {
  test('It should initialize a 9 x 9 grid', () => {
    const sudoku = new Sudoku();
    const expectedGrid = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
    expect(sudoku.grid);
  });
});

describe('sudoku rows', () => {
  test('It should return false if rows do not contain numbers 1-9', () => {
    const sudoku = new Sudoku();
    expect(sudoku.checkRows()).toBe(false);
  });
});
