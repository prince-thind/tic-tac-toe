import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Cell({ highlighted, index, playMove, content }) {
  return (
    <Paper
      sx={{
        backgroundColor: highlighted
          ? "secondary.main"
          : "info.dark",
        color: "white",
      }}
      className="cell"
      elevation={5}
      onClick={() => {
        playMove(index);
      }}
      key={index}
    >
      <Typography variant="h2" component="div">
        {content}
      </Typography>
    </Paper>
  );
}
