import React from 'react'
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Le Baron QuickOrder
      </Typography>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Menu</Button>
      <Button color="inherit">Orders</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Header
