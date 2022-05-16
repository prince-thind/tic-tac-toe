import { Container } from "@mui/material";
import Header from "./components/Header";
import Turn from "./components/Turn";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Turn />
      </Container>
    </div>
  );
}

export default App;
