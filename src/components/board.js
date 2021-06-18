import UI from "./UI.js";
import controller from "./controller";

const board = (function () {
  const cells = [];
  for (let i = 0; i < 9; i++) {
    cells.push(null);
  }

  let winner = null;

  function display() {
    winner = checkWinner();

    let activePlayer = controller.getActivePlayer();
    let statusString = "";
    if (activePlayer == controller.getPlayerName("player1")) {
      statusString = `Your Turn (${controller.getPlayerSymbol("player1")})`;
    } else {
      statusString = `${controller.getPlayerName("player2")}'s turn (${controller.getPlayerSymbol("player2")})`;
    }

    for (let i = 0; i < 9; i++) {
      let displayCell = UI.mainCells[i];
      displayCell.textContent = cells[i];
    }

    if (cellsFull()) {
      statusString = `It's a tie!`;
    }
    if (!!winner) {
      if (winner == controller.getPlayerName("player1")) {
        statusString = `You won!`;
      } else {
        statusString = `${winner} won!`;
      }
    }

    UI.statusBar.textContent = statusString;
  }

  function changeCell(index, value) {
    cells[index] = value;
  }
  function getWinner() {
    return winner;
  }

  function checkWinner() {
    const player1Symbol = controller.getPlayerSymbol("player1");
    const player2Symbol = controller.getPlayerSymbol("player2");
    if (checkHorizontal(player1Symbol) || checkVertical(player1Symbol) || checkDiagoanl(player1Symbol)) {
      return controller.getPlayerName("player1");
    }
    if (checkHorizontal(player2Symbol) || checkVertical(player2Symbol) || checkDiagoanl(player2Symbol)) {
      return controller.getPlayerName("player2");
    }
    return false;

    function checkHorizontal(symbol) {
      let flag = false;
      for (let i = 0; i < 7; i += 3) {
        if (cells[i] == symbol && cells[i] == cells[i + 1] && cells[i + 1] == cells[i + 2]) {
          flag = true;
        }
      }
      return flag;
    }
    function checkVertical(symbol) {
      let flag = false;
      for (let i = 0; i < 3; i++) {
        if (cells[i] == symbol && cells[i] == cells[i + 3] && cells[i + 3] == cells[i + 6]) {
          flag = true;
        }
      }
      return flag;
    }
    function checkDiagoanl(symbol) {
      let flag = false;
      if (cells[0] == symbol && cells[0] == cells[4] && cells[4] == cells[8]) {
        flag = true;
      }
      if (cells[2] == symbol && cells[2] == cells[4] && cells[4] == cells[6]) {
        flag = true;
      }
    }
  }

  function getCell(index) {
    return cells[index];
  }

  function cellsFull() {
    for (let cell of cells) {
      if (cell == null) {
        return false;
      }
    }
    return true;
  }

  function resetCells(){
    for(let i=0;i<9;i++){
      cells[i]=null;
    }
  }
  return { getCell, changeCell, display, getWinner, cellsFull,resetCells };
})();

export default board;
