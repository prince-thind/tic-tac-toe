import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Turn({ turn }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
        {turn}'s Turn
      </Paper>
    </Box>
  );
}
