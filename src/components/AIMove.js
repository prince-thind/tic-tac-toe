import { getPossibleMoves } from "./state";

export default function getAIMove() {
  const possibleMoves = getPossibleMoves();
  return possibleMoves[Math.trunc(Math.random() * possibleMoves.length)];
}
