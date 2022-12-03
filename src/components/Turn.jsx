import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Turn({ turn, winner }) {
  return (
    <Box sx={{ position: "relative", margin: "auto" }}>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "primary.main",
          p: 2,
          display: "block",
          maxWidth: "fit-content",
          color: "white",
          ml: "auto",
          mt: 2,
          mb: 2,
        }}
      >
        {winner.name ? `${winner.name} Won` : `${turn}'s Turn`}
      </Paper>
    </Box>
  );
}
