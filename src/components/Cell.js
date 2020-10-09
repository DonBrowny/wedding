import React, { useContext } from 'react';
import classNames from 'classnames';
import { SudokuContext } from '../context/SudokuState';

const position = [2, 5];
const Cell = ({ cellProperties }) => {
  const { row, column, value, isDefault } = cellProperties;
  const { selectedCell, setSelectedCell } = useContext(SudokuContext);
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
      <div
        className={cellClass}
        onClick={() => setSelectedCell(cellProperties)}
      >
        <span>{value === 0 ? '' : value}</span>
      </div>
      {/* <div>
      <div>
        <span>1</span> <span>2</span> <span>3</span>
      </div>
      <div>
        <span>4</span> <span>5</span> <span>6</span>
      </div>
      <div>
        <span>7</span> <span>8</span> <span>9</span>
      </div>
    </div> */}
    </>
  );
};

export default Cell;
