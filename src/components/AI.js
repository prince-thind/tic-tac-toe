import Minimax from 'tic-tac-toe-minimax';

function AIMove(cells) {
  const { ComputerMove } = Minimax;

  const huPlayer = 'X';
  const aiPlayer = 'O';
  const symbols = {
    huPlayer,
    aiPlayer,
  };

  const difficulty = 'Hard';

  const board = [];

  cells.forEach((cell, index) => {
    if (cell === null) {
      board[index] = index;
    } else if (cell === 'X') {
      board[index] = symbols.huPlayer;
    } else {
      board[index] = symbols.aiPlayer;
    }
  });

  const nextMove = ComputerMove(board, symbols, difficulty);
  return nextMove;
}

export default AIMove;
