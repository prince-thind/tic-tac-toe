let cells = Array(9).fill(null);
let AI = false;
let turn = "player1";

function setAI(flag) {
  AI = flag;
}

function changeTurn(player) {
  turn = player;
}

export { cells, AI, turn, changeTurn, setAI };
