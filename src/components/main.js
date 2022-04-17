import getAIMove from "./AIMove";
import getWinner from "./getWinner";
import {
  AI,
  cells,
  toggleTurn,
  getPossibleMoves,
  checkFull,
  getActivePlayerSymbol,
} from "./state";
import { display } from "./UI";

export default function main(e) {
  const winner = getWinner();
  if (winner) {
    return;
  }

  if (checkFull()) {
    return;
  }

  makeFirstMove(e);
}

function makeFirstMove(e) {
  const cellDiv = e.target;
  const index = +cellDiv.getAttribute("data-index");

  const possibleMoves = getPossibleMoves();
  if (!possibleMoves.includes(index)) {
    return;
  }
  cells[index] = getActivePlayerSymbol();
  display();
  toggleTurn();
  makeSecondMove();
}

function makeSecondMove() {
  if (AI) {
    const index = getAIMove();
    cells[index] = getActivePlayerSymbol();
    toggleTurn();
  }
  display();
}
