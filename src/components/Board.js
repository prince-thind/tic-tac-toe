import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

export default function Board({ board, setBoard, turn, setTurn, winner }) {
  function handleOnClick(index) {
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
            <Paper
              sx={{
                backgroundColor: winner.pair.includes(index)
                  ? "secondary.main"
                  : "info.dark",
                color: "white",
              }}
              className="cell"
              elevation={5}
              onClick={() => {
                handleOnClick(index);
              }}
              key={index}
            >
              <Typography variant="h2" component="div">
                {cell}
              </Typography>
            </Paper>
          );
        })}
      </Paper>
    </Container>
  );
}
