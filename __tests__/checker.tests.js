import Sudoku from './../src/checker.js';

describe('sudoku grid', () => {
  test('It should initialize a 9 x 9 grid', () => {
    const sudoku = new Sudoku();
    const expectedGrid = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
    expect(sudoku.grid).toEqual(expectedGrid);
  });
});

describe('sudoku rows', () => {
  test('It should contain all numbers from 1 to 9 with no repeats for rows', () => {
    const sudoku = new Sudoku();
    expect(sudoku.checkRows()).toBe(true);
  });
});
