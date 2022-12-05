let UI = (function () {
  let activePlayer = document.querySelector(".active-player");
  let result = document.querySelector(".result");
  let player1Input = document.querySelector("#player1");
  let player2Input = document.querySelector("#player2");
  let saveButton = document.querySelector(".save");
  let resetButton = document.querySelector(".reset");
  let mainBoard = document.querySelector(".main-board");
  let mainCells = [...document.querySelectorAll(".cell")];

  return { activePlayer, result, player1Input, player2Input, saveButton, resetButton, mainBoard, mainCells };
})();

let controller = (function () {
  let player1 = "Player1";
  let player2 = "Player2";
  let activePlayer = player1;
  let gameOver = false;
  let winner = null;
  let cells = [];
  for (let cell of UI.mainCells) {
    cells.push("-");
  }
  function display() {
    for (let i = 0; i < UI.mainCells.length; i++) {
      UI.mainCells[i].textContent = cells[i];
      UI.activePlayer.textContent = `Player Active: ${controller.activePlayer}`;
      if (controller.gameOver) {
        UI.result.textContent = `${controller.winner} has won the game`;
      } else {
        UI.result.textContent = "Result: Waiting";
      }
    }
  }
  return { player1, player2, activePlayer, gameOver, winner, cells, display };
})();

let board = (function () {
  let id = 0;
  for (let cell of UI.mainCells) {
    cell.addEventListener("click", move);
    cell.id = id++;
  }
  UI.resetButton.addEventListener("click", reset);
  UI.saveButton.addEventListener("click", save);

  function move(e) {
    if (e.target.textContent == "-" && !controller.gameOver) {
      if (controller.activePlayer == controller.player1) {
        controller.cells[e.target.id] = "*";
        controller.activePlayer = controller.player2;
      } else {
        controller.cells[e.target.id] = "o";
        controller.activePlayer = controller.player1;
      }
    }
    checkWinner();
    controller.display();
  }
  function reset() {
    for (let i = 0; i < controller.cells.length; i++) {
      controller.cells[i] = "-";
    }
    controller.activePlayer = controller.player1;
    controller.gameOver = false;
    controller.winner = null;
    controller.display();
  }
  function save() {
    controller.player1 = UI.player1Input.value || "Player1";
    controller.player2 = UI.player2Input.value || "Player2";
    if (controller.activePlayer == "Player1") {
      controller.activePlayer = controller.player1;
    } else {
      controller.activePlayer = controller.player2;
    }
    controller.display();
  }

  function checkWinner() {
    if (checkHorizontal("*") || checkVertical("*") || checkDiagoanl("*")) {
      controller.winner = controller.player1;
      controller.gameOver = true;
    }
    if (checkHorizontal("o") || checkVertical("o") || checkDiagoanl("o")) {
      controller.winner = controller.player2;
      controller.gameOver = true;
    }

    function checkHorizontal(symbol) {
      let flag = false;
      for (let i = 0; i < 6; i += 3) {
        if (controller.cells[i] == symbol && controller.cells[i] == controller.cells[i + 1] && controller.cells[i + 1] == controller.cells[i + 2]) {
          flag = true;
        }
      }
      return flag;
    }
    function checkVertical(symbol) {
      let flag = false;
      for (let i = 0; i < 3; i++) {
        if (controller.cells[i] == symbol && controller.cells[i] == controller.cells[i + 3] && controller.cells[i + 3] == controller.cells[i + 6]) {
          flag = true;
        }
      }
      return flag;
    }
    function checkDiagoanl(symbol) {
      let flag = false;
      if (controller.cells[0] == symbol && controller.cells[0] == controller.cells[4] && controller.cells[4] == controller.cells[8]) {
        flag = true;
      }
      if (controller.cells[2] == symbol && controller.cells[2] == controller.cells[4] && controller.cells[4] == controller.cells[6]) {
        flag = true;
      }

      return flag;
    }
  }
})();
