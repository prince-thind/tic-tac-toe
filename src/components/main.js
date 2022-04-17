import getAIMove from "./AIMove";
import {
  AI,
  cells,
  toggleTurn,
  getPossibleMoves,
  getActivePlayerSymbol,
} from "./state";
import { display } from "./UI";

export default function main(e) {
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
