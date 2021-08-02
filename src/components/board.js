const board = (() => {
  const cells = [];
  for (let i = 0; i < 9; i += 1) {
    cells.push(null);
  }

  function changeCell(index, value) {
    cells[index] = value;
  }

  function getCells() {
    return cells;
  }

  function cellsFull() {
   return !cells.some((cell) => cell === null);
  }

  function resetCells() {
    for (let i = 0; i < 9; i += 1) {
      cells[i] = null;
    }
  }
  return { getCells, changeCell, cellsFull, resetCells };
})();

export default board;
