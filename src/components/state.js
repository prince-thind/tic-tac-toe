const cells = Array(9).fill(null);
let player1Symbol = "X";
let player2Symbol = "O";
let AI = false;

let turn = "player1";

function setAI(flag) {
  AI = flag;
}

function toggleTurn() {
  if (turn == "player1") {
    turn = "player2";
  } else {
    turn = "player1";
  }
}

function getActivePlayerSymbol() {
  if (turn == "player1") {
    return player1Symbol;
  }
  return player2Symbol;
}

function getPossibleMoves() {
  const possibleMoves = [];
  let i = 0;
  for (const cell of cells) {
    if (cell === null) {
      possibleMoves.push(i);
    }
    i++;
  }

  return possibleMoves;
}

function checkFull() {
  return !cells.some((c) => c === null);
}

export {
  cells,
  AI,
  turn,
  player1Symbol,
  player2Symbol,
  checkFull,
  toggleTurn,
  setAI,
  getPossibleMoves,
  getActivePlayerSymbol,
};
