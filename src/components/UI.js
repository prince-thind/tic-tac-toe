
const UI = (function () {
    const AISelectionYes = document.querySelector("#button-accept");
    const AISelectionNo = document.querySelector("#button-cancel");
    const statusBar = document.querySelector("#status-bar");
    const resetButton = document.querySelector("#reset");
    const mainBoard = document.querySelector("#main-board");
    const mainCells = [...document.querySelectorAll(".cell")];
    const mainBody = document.querySelector("#main");
    const menu = document.querySelector("#menu");
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

  export default UI;