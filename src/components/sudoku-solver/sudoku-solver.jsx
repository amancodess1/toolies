import React, { useState } from 'react';
import styles from './sudoku-solver.module.css';

const SudokuSolver = () => {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill('')));
  const [error, setError] = useState(null);

  const deepCopyGrid = (grid) => grid.map(row => row.slice());

  const isValid = (grid, row, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) return false;
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[startRow + i][startCol + j] === num) return false;
      }
    }
    return true;
  };

  const solveSudoku = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === '') {
          for (let num = 1; num <= 9; num++) {
            if (isValid(grid, row, col, num.toString())) {
              grid[row][col] = num.toString();
              if (solveSudoku(grid)) return true;
              grid[row][col] = '';
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const handleSolve = () => {
    const gridCopy = deepCopyGrid(grid);
    if (solveSudoku(gridCopy)) {
      setGrid(gridCopy);
      setError(null);
    } else {
      setError('No solution exists for this puzzle');
    }
  };

  const handleChange = (row, col, value) => {
    if (/^[1-9]?$/.test(value)) {
      const newGrid = deepCopyGrid(grid);
      newGrid[row][col] = value;
      setGrid(newGrid);
    }
  };

  const handleReset = () => {
    setGrid(Array(9).fill(Array(9).fill('')));
    setError(null);
  };

  return (
    <div className={styles.sudokuContainer}>
      <h2 className={styles.sudokuTitle}>Sudoku Solver</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <div className={styles.sudokuGrid}>
        {grid.map((row, rowIndex) => 
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              value={cell}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              className={`${styles.sudokuCell} ${
                (colIndex + 1) % 3 === 0 && colIndex !== 8 ? styles.subgridBorderCol : ''
              } ${
                (rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? styles.subgridBorderRow : ''
              }`}
            />
          ))
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleSolve} className={styles.solveButton}>
          Solve
        </button>
        <button onClick={handleReset} className={styles.resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SudokuSolver;
