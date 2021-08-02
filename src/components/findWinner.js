import board from './board';

function findWinner({ getPlayerName, getPlayerSymbol }) {
  const cells = board.getCells();

  const player1Symbol = getPlayerSymbol('player1');
  const player2Symbol = getPlayerSymbol('player2');

  if (
    checkHorizontal(player1Symbol) ||
    checkVertical(player1Symbol) ||
    checkDiagoanl(player1Symbol)
  ) {
    return getPlayerName('player1');
  }
  if (
    checkHorizontal(player2Symbol) ||
    checkVertical(player2Symbol) ||
    checkDiagoanl(player2Symbol)
  ) {
    return getPlayerName('player2');
  }
  return false;

  function checkHorizontal(symbol) {
    let flag = false;
    for (let i = 0; i < 7; i += 3) {
      if (
        cells[i] === symbol &&
        cells[i] === cells[i + 1] &&
        cells[i + 1] === cells[i + 2]
      ) {
        flag = true;
      }
    }
    return flag;
  }
  function checkVertical(symbol) {
    let flag = false;
    for (let i = 0; i < 3; i += 1) {
      if (
        cells[i] === symbol &&
        cells[i] === cells[i + 3] &&
        cells[i + 3] === cells[i + 6]
      ) {
        flag = true;
      }
    }
    return flag;
  }
  function checkDiagoanl(symbol) {
    let flag = false;
    if (cells[0] === symbol && cells[0] === cells[4] && cells[4] === cells[8]) {
      flag = true;
    }
    if (cells[2] === symbol && cells[2] === cells[4] && cells[4] === cells[6]) {
      flag = true;
    }
    return flag;
  }
}

export default findWinner;
