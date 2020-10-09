import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const data = {
  board: [
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 0, 8, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 4, 7, 5, 0, 9, 0],
    [0, 0, 0, 8, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 1, 5],
    [0, 0, 6, 7, 0, 0, 0, 5, 8],
    [5, 4, 0, 0, 8, 0, 0, 6, 1],
    [0, 0, 1, 5, 0, 6, 7, 4, 2],
  ],
};
const input = data.board.map((row) => {
  return row.map((col) => {
    const isDefault = col > 0;
    return { value: col, isDefault: isDefault };
  });
});

const intialState = {
  sudokuData: input,
  selectedCell: undefined,
};

export const SudokuContext = createContext(intialState);

export const SudokuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  function setSelectedCell(selectedCell) {
    dispatch({
      type: 'SET_SELECTED',
      payload: selectedCell,
    });
  }

  return (
    <SudokuContext.Provider value={{ ...state, setSelectedCell }}>
      {children}
    </SudokuContext.Provider>
  );
};
