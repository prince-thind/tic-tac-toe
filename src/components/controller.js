import UI from "./UI.js";
import board from "./board.js";

const controller = (function () {
  const player1 = {
    name: "Player X",
    symbol: "X",
    active: "true",
  };
  const player2 = {
    name: "Player 2",
    symbol: "O",
    active: "false",
  };

  function setGameMode(AIFlag) {
    UI.mainCells.forEach(setLogic);
    if (!!AIFlag) {
      player2.name = "Computer";
    }

    function setLogic(cell) {
      if (!!AIFlag) {
        cell.addEventListener("click", (event) => {
          AILogic(event);
        });
      } else {
        cell.addEventListener("click", (event) => {
          playerLogic(event);
        });
      }
    }
  }

  function playerLogic(event) {
    const div = event.target;
    if (div.textContent == "" && !board.getWinner()) {
      if (player1.active) {
        board.changeCell(div.getAttribute("data-id"), player1.symbol);
        player2.active = true;
        player1.active = false;
      } else {
        board.changeCell(div.getAttribute("data-id"), player2.symbol);
        player2.active = false;
        player1.active = true;
      }
    }
    board.display();
  }

  function AILogic(event) {
    const div = event.target;

    if (div.textContent == "" && !board.getWinner()) {
      board.changeCell(div.getAttribute("data-id"), player1.symbol);
      board.display();

      if (!board.getWinner()) {
        makeAIMove();
      }
    }
    board.display();
  }

  function makeAIMove() {
    while (true) {
      if (board.cellsFull()) break;
      let index = Math.trunc(Math.random() * 9);
      if (board.getCell(index) == null) {
        board.changeCell(index, player2.symbol);
        break;
      }
    }
  }

  function getPlayerName(str){
    if(str=="player1"){
      return player1.name;
    }
    return player2.name;
  }

  function getActivePlayer(str){
    if(player1.active){
      return player1.name;
    }
    return player2.name;
  }

  function getPlayerSymbol(str){
    if(str=="player1"){
      return player1.symbol;
    }
    return player2.symbol;
  }

  return { getActivePlayer, getPlayerName,getPlayerSymbol, setGameMode };
})();

export default controller;
