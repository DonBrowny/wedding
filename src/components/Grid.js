import React, { useContext } from 'react';
import Cell from './Cell';
import { SudokuContext } from '../context/SudokuState';

const Grid = () => {
  const rowArray = [];
  const { sudokuData } = useContext(SudokuContext);
  sudokuData.forEach((row, rowIndex) => {
    rowArray.push(
      <div className="sudoku-row">
        {row.map((col, colIndex) => (
          <Cell
            cellProperties={{
              row: rowIndex,
              column: colIndex,
              value: col.value,
              isDefault: col.isDefault,
            }}
          />
        ))}
      </div>
    );
  });
  return <div className="sudoku-column">{rowArray}</div>;
};

export default Grid;
