import UI from './UI';
import board from './board';
import render from './render';
import controller from './controller';

(() => {
  UI.resetButton.addEventListener('click', reset);

  function reset() {
    board.resetCells();
    render(controller.playerInfo);
  }
})();
