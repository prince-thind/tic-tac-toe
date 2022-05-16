import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";

import { useState } from "react";
import Header from "./components/Header";
import Turn from "./components/Turn";
import Board from "./components/Board";
import findWinner from "./lib/findWinner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("O");
  const [animate, setAnimate] = useState(true);
  const winner = findWinner(board); //indices, name

  function reset() {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 500);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <Header />
      <Container>
        <Turn turn={turn} winner={winner} />
        <Grow in={animate}>
          <Box>
            <Board
              board={board}
              setBoard={setBoard}
              turn={turn}
              setTurn={setTurn}
              winner={winner}
            />
          </Box>
        </Grow>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            onClick={reset}
            variant="contained"
            color="error"
            size="large"
          >
            Reset
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
