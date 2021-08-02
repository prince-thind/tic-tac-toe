const board = (function () {
  const cells = [];
  for (let i = 0; i < 9; i++) {
    cells.push(null);
  }

  function changeCell(index, value) {
    cells[index] = value;
  }

  function getCells() {
    return cells;
  }

  function cellsFull() {
    for (let cell of cells) {
      if (cell === null) {
        return false;
      }
    }
    return true;
  }

  function resetCells() {
    for (let i = 0; i < 9; i++) {
      cells[i] = null;
    }
  }
  return { getCells, changeCell, cellsFull, resetCells };
})();

export default board;
