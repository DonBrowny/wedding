import React from 'react';
import Grid from '../components/Grid';
import { SudokuProvider } from '../context/SudokuState';
import '../styles/Sudoku.css';

function Sudoku() {
  return (
    <SudokuProvider>
      <span>Sudoku</span>
      <Grid />
    </SudokuProvider>
  );
}

export default Sudoku;
