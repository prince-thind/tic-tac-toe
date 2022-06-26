import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Turn({ turn, winner }) {
  return (
    <Box sx={{ position:'absolute', right:'2rem' }}>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "primary.main",
          p: 2,
          mt: 1,
          display: "inline-block",
          color: "white",
        }}
      >
        {winner.name ? `${winner.name} Won` : `${turn}'s Turn`}
      </Paper>
    </Box>
  );
}
