import findWinner from './findWinner';
import board from './board';
import UI from './UI';

function render({ getActivePlayer, getPlayerName, getPlayerSymbol }) {
  const winner = findWinner({ getActivePlayer, getPlayerName, getPlayerSymbol });
  const cells = board.getCells();

  const activePlayer = getActivePlayer();
  let statusString = '';
  if (activePlayer === getPlayerName('player1')) {
    statusString = `Your Turn (${getPlayerSymbol('player1')})`;
  } else {
    statusString = `${getPlayerName('player2')}'s turn (${getPlayerSymbol(
      'player2'
    )})`;
  }

  for (let i = 0; i < 9; i += 1) {
    const displayCell = UI.mainCells[i];
    displayCell.textContent = cells[i];
  }

  if (board.cellsFull()) {
    statusString = "It's a tie!";
  }

  if (winner) {
    if (winner === getPlayerName('player1')) {
      statusString = 'You won!';
    } else {
      statusString = `${winner} won!`;
    }
  }

  UI.statusBar.textContent = statusString;
}

export default render;
