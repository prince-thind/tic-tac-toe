import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function DenseAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar variant="dense" sx={{backgroundColor:'success.dark'}}>
          <Typography variant="h4" color="inherit" component="h1" sx={{p:2}}>
            Tic Tac Toe
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
