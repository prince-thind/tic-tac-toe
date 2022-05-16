import { Container } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";
import Turn from "./components/Turn";
import Board from "./components/Board";
import findWinner from "./lib/findWinner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("O");

  const winner = findWinner(board); //indices, name
  return (
    <div className="App">
      <Header />
      <Container>
        <Turn turn={turn} />
        <Board
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          winner={winner}
        />
      </Container>
    </div>
  );
}

export default App;
