export default function findWinner(board) {
  const winningPairs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pair of winningPairs) {
    const index1 = pair[0];
    const index2 = pair[1];
    const index3 = pair[2];


    if (
      board[index1] === "O" &&
      board[index2] === "O" &&
      board[index3] === "O"
    ) {
      return { name: "O", pair };
    }

    if (
      board[index1] === "X" &&
      board[index2] === "X" &&
      board[index3] === "X"
    ) {
      return { name: "X", pair };
    }
  }

  return { name: null, pair: [] };
}
