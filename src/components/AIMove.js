import { cells, player1Symbol, player2Symbol } from "./state";
import Minimax from "tic-tac-toe-minimax";
export default function getAIMove() {
  const { ComputerMove } = Minimax;

  const huPlayer = player1Symbol;
  const aiPlayer = player2Symbol;
  const symbols = {
    huPlayer,
    aiPlayer,
  };

  const difficulty = "Hard";

  const board = cells.map((c, i) => {
    if (c === null) {
      return i;
    }
    return c;
  });

  const nextMove = ComputerMove(board, symbols, difficulty);
  return nextMove;
}
