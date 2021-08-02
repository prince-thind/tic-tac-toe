import UI from './UI';
import board from './board';
import render from './render';
import findWinner from './findWinner';
import AIMove from './AI';

const controller = (() => {
  const player1 = {
    name: 'Player X',
    symbol: 'X',
    active: 'true',
  };
  const player2 = {
    name: 'Player 2',
    symbol: 'O',
    active: 'false',
  };
  const playerInfo = {
    getActivePlayer,
    getPlayerName,
    getPlayerSymbol,
  };

  function setGameMode(AIFlag) {
    UI.mainCells.forEach(setLogic);
    if (AIFlag) {
      player2.name = 'Computer';
    }

    function setLogic(cell) {
      if (AIFlag) {
        cell.addEventListener('click', (event) => {
          AILogic(event);
        });
      } else {
        cell.addEventListener('click', (event) => {
          playerLogic(event);
        });
      }
    }
  }

  function playerLogic(event) {
    const div = event.target;
    if (div.textContent === '' && !findWinner(playerInfo)) {
      if (player1.active) {
        board.changeCell(div.getAttribute('data-id'), player1.symbol);
        player2.active = true;
        player1.active = false;
      } else {
        board.changeCell(div.getAttribute('data-id'), player2.symbol);
        player2.active = false;
        player1.active = true;
      }
    }
    render(playerInfo);
  }

  function AILogic(event) {
    const div = event.target;

    if (div.textContent === '' && !findWinner(playerInfo)) {
      board.changeCell(div.getAttribute('data-id'), player1.symbol);
      render(playerInfo);

      if (!findWinner(playerInfo)) {
        makeAIMove();
      }
    }
    render(playerInfo);
  }

  function makeAIMove() {
    const index = AIMove(board.getCells());
    board.changeCell(index, player2.symbol);
  }

  function getPlayerName(str) {
    if (str === 'player1') {
      return player1.name;
    }
    return player2.name;
  }

  function getActivePlayer() {
    if (player1.active) {
      return player1.name;
    }
    return player2.name;
  }

  function getPlayerSymbol(str) {
    if (str === 'player1') {
      return player1.symbol;
    }
    return player2.symbol;
  }

  return { playerInfo, setGameMode };
})();

export default controller;
