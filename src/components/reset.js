import UI from "./UI.js";
import board from "./board.js";

const ResetModule = (function () {
    UI.resetButton.addEventListener("click", reset);
  
    function reset(e) {
      board.resetCells();
      board.display();
    }
  })();

  export default ResetModule;