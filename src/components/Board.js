import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Cell from "./Cell";

export default function Board({ board, setBoard, turn, setTurn, winner }) {
  
  
  function playMove(index) {
    if (winner.name !== null) return;
    const possibleMoves = board.map((e, i) => {
      if (e === null) return e;
      return i;
    });
    if (possibleMoves.includes(index)) return;

    const boardCopy = board.slice();
    boardCopy[index] = turn;
    setBoard(boardCopy);
    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <Container elevation={3} maxWidth="xs">
      <Paper
        className="grid"
        elevation={15}
        sx={{ backgroundColor: "primary.main", mt: 2 }}
      >
        {board.map((cell, index) => {
          return (
            <Cell
              index={index}
              content={cell}
              highlighted={winner.pair.includes(index)}
              playMove={playMove}
            />
          );
        })}
      </Paper>
    </Container>
  );
}
