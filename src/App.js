import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import Header from "./components/Header";
import Turn from "./components/Turn";
import Board from "./components/Board";
import findWinner from "./lib/findWinner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("O");
  const winner = findWinner(board); //indices, name

  function reset() {
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <Header />
      <Container>
        <Turn turn={turn} winner={winner} />
        <Board
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          winner={winner}
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button onClick={reset} variant="contained" color="error">
            Reset
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
