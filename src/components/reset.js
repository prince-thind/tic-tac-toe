import UI from "./UI.js";
import board from "./board.js";
import render from "./render";

(function () {
    UI.resetButton.addEventListener("click", reset);
  
    function reset() {
      board.resetCells();
      render();
    }
  })();
