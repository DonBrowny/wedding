import React, { useContext } from 'react';
import Cell from './Cell';
import { SudokuContext } from '../context/SudokuState';

const Grid = () => {
  const rowArray = [];
  const { sudokuData, setSelectedCell } = useContext(SudokuContext);

  const onCellClick = (event) => {
    const row = parseInt(event.target.getAttribute('data-row'));
    const column = parseInt(event.target.getAttribute('data-column'));
    try {
      const filteredValue = sudokuData.filter((x, index) => index === row)[0].filter((y, index) => index === column)[0]
      console.log({ row, column, ...filteredValue })
      setSelectedCell({ row, column, ...filteredValue });
    } catch (error) {
      throw error;
    }
  }
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
  return <div className="sudoku-column" onClick={(e) => onCellClick(e)}>{rowArray}</div>;
};

export default Grid;
