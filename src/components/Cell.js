import React, { useContext } from 'react';
import classNames from 'classnames';
import { SudokuContext } from '../context/SudokuState';

const position = [2, 5];
const Cell = ({ cellProperties }) => {
  const { row, column, value, isDefault } = cellProperties;
  const { selectedCell } = useContext(SudokuContext);
  const currentsCellSelectedCell =
    selectedCell &&
    selectedCell.row === row &&
    selectedCell.column === column &&
    !selectedCell.isDefault;

  var cellClass = classNames({
    cell: true,
    rightDark: column === 8,
    rightLight: position.includes(column),
    leftDark: column === 0,
    bottomDark: row === 8,
    bottomLight: position.includes(row),
    topDark: row === 0,
    editable: !isDefault,
    locked: isDefault,
    highlightCell:
      !currentsCellSelectedCell &&
      selectedCell &&
      (selectedCell.row === row || selectedCell.column === column),
    cellSelect: currentsCellSelectedCell,
    highlightValue: selectedCell && selectedCell.value === value,
  });
  return (
    <>
      <div data-row={row} data-column={column}
        className={cellClass}
      // onClick={() => setSelectedCell(cellProperties)}
      >
        {value === 0 ? '' : value}
      </div>
    </>
  );
};

export default Cell;
