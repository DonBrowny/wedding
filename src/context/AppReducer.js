export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_SUDOKU':
      let data = state.sudokuData;
      let { row, col, value } = action.payload;
      const ret = data.slice(0);
      const newRow = ret[row].splice(0);
      newRow[col] = { value: value, isDefault: false };
      ret[row] = newRow;
      return { ...state, sudokuData: ret };
    case 'SET_SELECTED':
      return { ...state, selectedCell: action.payload };
    default:
      break;
  }
};
