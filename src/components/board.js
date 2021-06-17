import UI from "./UI.js";
import controller from "./controller";

const board = (function () {
  const cells = [];
  let winner = null;

  for (let i = 0; i < 9; i++) {
    cells.push(null);
  }

  function display() {
    winner = checkWinner();
    UI.statusBar.textContent=controller.player1.active?`Your Turn (${controller.player1.symbol})`:`${controller.player2.name}'s turn (${controller.player2.symbol})`;
    for (let i = 0; i < 9; i++) {
      let displayCell = UI.mainCells[i];
      displayCell.textContent = cells[i];
    }
    if(cellsFull()){
      UI.statusBar.textContent = `It's a tie!`;
    }
    if (!!winner) {
      if(winner.name==controller.player1.name){
        UI.statusBar.textContent = `You won!`;
        return;
      }
      UI.statusBar.textContent = `${winner.name} won!`;
    } 

  }

  function changeCell(index, value) {
    cells[index] = value;
  }
  function getWinner() {
    return winner;
  }

  function checkWinner() {
    if (
      checkHorizontal(controller.player1.symbol) ||
      checkVertical(controller.player1.symbol) ||
      checkDiagoanl(controller.player1.symbol)
    ) {
      return controller.player1;
    }
    if (
      checkHorizontal(controller.player2.symbol) ||
      checkVertical(controller.player2.symbol) ||
      checkDiagoanl(controller.player2.symbol)
    ) {
      return controller.player2;
    }
    return false;

    function checkHorizontal(symbol) {
      let flag = false;
      for (let i = 0; i < 6; i += 3) {
        if (
          cells[i] == symbol &&
          cells[i] == cells[i + 1] &&
          cells[i + 1] == cells[i + 2]
        ) {
          flag = true;
        }
      }
      return flag;
    }
    function checkVertical(symbol) {
      let flag = false;
      for (let i = 0; i < 3; i++) {
        if (
          cells[i] == symbol &&
          cells[i] == cells[i + 3] &&
          cells[i + 3] == cells[i + 6]
        ) {
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

  function getCell(index){
    return cells[index];
  }

  function cellsFull(){
    for(let cell of cells){
      if(cell==null){
        return false;
      }
    }
    return true;
  }
  return { getCell, changeCell, display, getWinner,cellsFull };
})();

export default board;
