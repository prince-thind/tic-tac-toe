import { Container } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";
import Turn from "./components/Turn";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill('O'));

  return (
    <div className="App">
      <Header />
      <Container>
        <Turn />
        <Board board={board} setBoard={setBoard} />
      </Container>
    </div>
  );
}

export default App;
