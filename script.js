let UI = (function () {
  let activePlayer = document.querySelector(".active-player");
  let result = document.querySelector(".result");
  let player1Input = document.querySelector("#player1");
  let player2Input = document.querySelector("#player2");
  let saveButton = document.querySelector(".save");
  let resetButton = document.querySelector(".reset");
  let mainBoard = document.querySelector(".main-board");
  let mainCells = [...document.querySelectorAll(".cell")];

  return {
    activePlayer,
    result,
    player1Input,
    player2Input,
    saveButton,
    resetButton,
    mainBoard,
    mainCells,
  };
})();

let controller = (function () {
  let player1 = "Player1";
  let player2 = "Player2";
  let activePlayer = player1;
  let gameOver = false;
  let winner = null;

  return { player1, player2, activePlayer, gameOver, winner };
})();

let board = (function () {
  for (let cell of UI.mainCells) {
    cell.addEventListener("click", main);
  }
  UI.resetButton.addEventListener("click", reset);
  UI.saveButton.addEventListener("click", save);

  function main(e) {
    if (e.target.textContent == "-" && !controller.gameOver) {
      if (controller.activePlayer == controller.player1) {
        e.target.textContent = "*";
        controller.activePlayer = controller.player2;
      } else {
        e.target.textContent = "o";
        controller.activePlayer = controller.player1;
      }
      UI.activePlayer.textContent = `Player Active: ${controller.activePlayer}`;
    }
    checkWinner();
    if (controller.gameOver) {
      UI.result.textContent = `${controller.winner} has won the game`;
    }
  }
  function reset() {
    for (cell of UI.mainCells) {
      cell.textContent = "-";
      controller.activePlayer = controller.player1;
      controller.gameOver = false;
      UI.result.textContent="Result: Waiting";
      UI.activePlayer.textContent = `Player Active: ${controller.activePlayer}`;
    }
  }
  function save() {
    controller.player1 = UI.player1Input.value || "player1";
    controller.player2 = UI.player2Input.value || "player2";
  }

  function checkWinner() {
    let arr = [];
    for (let cell of UI.mainCells) {
      arr.push(cell.textContent);
    }
    if (checkHorizontal("*") || checkVertical("*") || checkDiagoanl("*")) {
      controller.winner = controller.player1;
      controller.gameOver = true;
      return;
    }
    if (checkHorizontal("o") || checkVertical("o") || checkDiagoanl("o")) {
      controller.winner = controller.player2;
      controller.gameOver = true;
      return;
    }

    function checkHorizontal(symbol) {
      let flag = false;
      for (let i = 0; i < 9; i += 3) {
        if (arr[i] == symbol && arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2]) {
          flag = true;
        }
      }
      return flag;
    }
    function checkVertical(symbol) {
      let flag = false;
      for (let i = 0; i < 3; i++) {
        if (arr[i] == symbol && arr[i] == arr[i + 3] && arr[i + 3] == arr[i + 6]) {
          flag = true;
        }
      }
      return flag;
    }
    function checkDiagoanl(symbol) {
      let flag = false;
      if (arr[0] == symbol && arr[0] == arr[4] && arr[4] == arr[8]) {
        flag = true;
      }
      if (arr[2] == symbol && arr[2] == arr[4] && arr[4] == arr[6]) {
        flag = true;
      }

      return flag;
    }
  }
})();
