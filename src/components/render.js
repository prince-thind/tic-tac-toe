import controller from './controller';
import findWinner from './findWinner';
import board from './board';
import UI from './UI';

function render() {
  const winner = findWinner();
  const cells = board.getCells();

  const activePlayer = controller.getActivePlayer();
  let statusString = '';
  if (activePlayer == controller.getPlayerName('player1')) {
    statusString = `Your Turn (${controller.getPlayerSymbol('player1')})`;
  } else {
    statusString = `${controller.getPlayerName(
      'player2'
    )}'s turn (${controller.getPlayerSymbol('player2')})`;
  }

  for (let i = 0; i < 9; i++) {
    const displayCell = UI.mainCells[i];
    displayCell.textContent = cells[i];
  }

  if (board.cellsFull()) {
    statusString = `It's a tie!`;
  }
  
  if (winner) {
    if (winner == controller.getPlayerName('player1')) {
      statusString = `You won!`;
    } else {
      statusString = `${winner} won!`;
    }
  }

  UI.statusBar.textContent = statusString;
}

export default render;
