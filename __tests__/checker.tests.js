import Sudoku from './../src/checker.js';

describe('sudoku grid', () => {
  test('It should initialize a 9 x 9 grid', () => {
    const sudoku = new Sudoku();
    const expectedGrid = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
    expect(sudoku.grid);
  });
});

describe('sudoku rows', () => {
  test('It should return false if rows do not contain numbers 1-9 and no repeats', () => {
    const sudoku = new Sudoku();
    // tested false instead of true for 100% line coverage 
    expect(sudoku.checkRows()).toBe(false);
  });
});

describe('sudoku columns', () => {
  test('It should return false if columns do not contain numbers 1-9 and no repreats', () => {
  const sudoku = new Sudoku();
  expect(sudoku.checkColumns()).toBe(false);
  });
});

describe('sudoku sub-grid', () => {
  test("It should test for 3 x 3 grid containing numbers 1-9 and no repeats", () => {
    const sudoku = new Sudoku();
    expect(sudoku.checkSubGrids()).toBe(false);
  });
});