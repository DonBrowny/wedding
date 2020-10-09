import React from 'react';
import Grid from './Grid';
import { SudokuProvider } from '../context/SudokuState';
import './Sudoku.css';

function Sudoku() {
  return (
    <SudokuProvider>
      <span>Sudoku</span>
      <Grid />
    </SudokuProvider>
  );
}

export default Sudoku;
