import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

export default function Board({ board, setBoard }) {
  return (
    <Container elevation={3} maxWidth="xs">
      <Paper
        className="grid"
        elevation={15}
        sx={{ backgroundColor: "primary.main", mt: 2 }}
      >
        {board.map((cell) => {
          return (
            <Paper
              sx={{ backgroundColor: "info.dark", color: "white" }}
              className="cell"
              elevation={5}
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
