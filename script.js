/*UI namespace*/
const UI = (function () {
  const AISelectionYes = document.querySelector(".button-accept");
  const AISelectionNo = document.querySelector(".button-cancel");
  const statusBar = document.querySelector(".status-bar");
  const resetButton = document.querySelector(".reset");
  const mainBoard = document.querySelector(".main-board");
  const mainCells = [...document.querySelectorAll(".cell")];
  const mainBody = document.querySelector(".main");
  const menu = document.querySelector(".menu");
  return {
    AISelectionNo,
    AISelectionYes,
    statusBar,
    resetButton,
    mainBoard,
    mainCells,
    menu,
    mainBody,
  };
})();

const board = (function () {
  const cells = [];
  let winner = null;
  for (let i = 0; i < 9; i++) {
    cells.push(null);
  }

  function display() {
    for (let i = 0; i < 9; i++) {
      let displayCell = UI.mainCells[i];
      displayCell.textContent = cells[i];
    }
    if (!!winner) {
      UI.statusBar.textContent = `${winner} won!`;
    }
  }

  function changeCell(index, value) {
    cells[index] = value;
  }
  function getWinner(){
    return winner;
  }

  
  return { changeCell, display, getWinner };
})();

const controller = (function () {
  const player1 = "Player X";
  const player2 = "Player O";
  let activePlayer = player1;
  let AIFlag = null;

  (function move() {
    UI.mainCells.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        if (!!AIFlag) {
          AILogic(event);
        } else {
          player2Logic(event);
        }
      });
    });
  })();

  function player2Logic(event) {
    const div = event.target;
    if (div.textContent == "" && !board.getWinner()) {
      if (activePlayer == player1) {
        board.changeCell(div.getAttribute("data-id"), "*");
        activePlayer = player2;
      } else {
        board.changeCell(div.getAttribute("data-id"), "O");
        activePlayer = player1;
      }
    }
    board.display();
  }

  function AILogic(event){

  }

  function setAI(value) {
    AIFlag = value;
  }

  function setActivePlayer(player) {
    activePlayer = player;
  }

  return { player1, player2, setAI, setActivePlayer };
})();

const menuModule = (function () {
  UI.AISelectionYes.addEventListener("click", () => {
    UI.mainBody.classList.toggle("hidden");
    UI.menu.classList.toggle("hidden");
    controller.setAI(true);
  });
  UI.AISelectionNo.addEventListener("click", () => {
    UI.mainBody.classList.toggle("hidden");
    UI.menu.classList.toggle("hidden");
    controller.setAI(false);
  });
})();
